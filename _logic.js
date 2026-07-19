// ==================== LIVE DATA ====================
let LIVE_DATA = null, LIVE_FUND = null;

async function loadLiveData() {
    try {
        const priceResp = await fetch('data/prices.json');
        if (priceResp.ok) {
            LIVE_DATA = await priceResp.json();
            console.log('Loaded live price data:', Object.keys(LIVE_DATA.stocks || {}).length, 'stocks, updated:', LIVE_DATA.updated);
        }
    } catch (e) {
        console.log('Live price data not available, using simulated data.');
    }
    try {
        const fundResp = await fetch('data/fundamentals.json');
        if (fundResp.ok) {
            LIVE_FUND = await fundResp.json();
            console.log('Loaded live fundamental data:', Object.keys(LIVE_FUND.stocks || {}).length, 'stocks');
        }
    } catch (e) {
        console.log('Live fundamental data not available, using simulated data.');
    }
}

// ==================== PORTFOLIO ====================
const PF_KEY='stockDash3';
function loadPortfolio(){const s=localStorage.getItem(PF_KEY);if(s)return JSON.parse(s);return[
{symbol:'APOLLOHOSP',exchange:'nse',qty:5,avgPrice:7389.25},
{symbol:'APOLLOTYRE',exchange:'bse',qty:100,avgPrice:460.64},
{symbol:'ASIANPAINT',exchange:'nse',qty:25,avgPrice:2625.54},
{symbol:'ASTERDM',exchange:'bse',qty:50,avgPrice:740.75},
{symbol:'ATHERENERG',exchange:'bse',qty:24,avgPrice:952.55},
{symbol:'AUBANK',exchange:'bse',qty:14,avgPrice:251.5},
{symbol:'AXISBANK',exchange:'nse',qty:49,avgPrice:920.65},
{symbol:'BANDHANBNK',exchange:'bse',qty:6,avgPrice:205.9},
{symbol:'BHARTIARTL',exchange:'nse',qty:19,avgPrice:2056.55},
{symbol:'CELLO',exchange:'bse',qty:23,avgPrice:648.0},
{symbol:'ECLERX',exchange:'bse',qty:30,avgPrice:1501.8},
{symbol:'HAL',exchange:'nse',qty:5,avgPrice:4618.65},
{symbol:'HAVELLS',exchange:'bse',qty:25,avgPrice:1495.37},
{symbol:'HDFCAMC',exchange:'bse',qty:15,avgPrice:2591.55},
{symbol:'HDFCBANK',exchange:'nse',qty:88,avgPrice:851.18},
{symbol:'HINDCOPPER',exchange:'bse',qty:30,avgPrice:738.55},
{symbol:'HUDCO',exchange:'bse',qty:50,avgPrice:269.96},
{symbol:'ICICIBANK',exchange:'nse',qty:24,avgPrice:750.52},
{symbol:'JIOFIN',exchange:'nse',qty:74,avgPrice:272.04},
{symbol:'KALYANKJIL',exchange:'bse',qty:25,avgPrice:512.0},
{symbol:'NTPC',exchange:'nse',qty:50,avgPrice:356.0},
{symbol:'PAYTM',exchange:'bse',qty:15,avgPrice:910.22},
{symbol:'PNB',exchange:'bse',qty:474,avgPrice:103.93},
{symbol:'RELIANCE',exchange:'nse',qty:32,avgPrice:630.71},
{symbol:'SBIN',exchange:'nse',qty:50,avgPrice:866.45},
{symbol:'TARSONS',exchange:'bse',qty:30,avgPrice:504.6},
{symbol:'TITAN',exchange:'nse',qty:18,avgPrice:3060.42},
{symbol:'UNIONBANK',exchange:'bse',qty:150,avgPrice:146.25},
{symbol:'YESBANK',exchange:'bse',qty:700,avgPrice:21.99},
{symbol:'GROWW',exchange:'bse',qty:415,avgPrice:179.27},
{symbol:'VIYASH',exchange:'bse',qty:16,avgPrice:275.01},
{symbol:'FCL',exchange:'nse',qty:200,avgPrice:45.04},
{symbol:'FINPIPE',exchange:'nse',qty:80,avgPrice:250.56},
{symbol:'IDEA',exchange:'nse',qty:31,avgPrice:17.73},
{symbol:'KWIL',exchange:'bse',qty:20,avgPrice:43.48},
{symbol:'TMCV',exchange:'bse',qty:10,avgPrice:223.35},
{symbol:'TMPV',exchange:'bse',qty:10,avgPrice:493.65},
{symbol:'GOLD1-E',exchange:'nse',qty:260,avgPrice:112.57},
{symbol:'SILVERIETF-E',exchange:'nse',qty:2489,avgPrice:165.49}];}
function savePortfolio(p){localStorage.setItem(PF_KEY,JSON.stringify(p));}
let portfolio=loadPortfolio();

// ==================== UTILITIES ====================
function seededRng(seed){let s=seed;return function(){s=(s*1664525+1013904223)&0xffffffff;return(s>>>0)/4294967296;};}
function hash(str){let h=0;for(let i=0;i<str.length;i++){h=((h<<5)-h)+str.charCodeAt(i);h|=0;}return Math.abs(h);}
function genPrices(stock,days){
    // Try live data first
    if(LIVE_DATA&&LIVE_DATA.stocks&&LIVE_DATA.stocks[stock.symbol]){
        const lp=LIVE_DATA.stocks[stock.symbol].prices;
        if(lp&&lp.length>=days)return lp.slice(-days);
        if(lp&&lp.length>0)return lp;
    }
    // Fallback to simulated
    const rng=seededRng(hash(stock.symbol+stock.sector+days));const prices=[];let p=stock.basePrice;const vol=stock.basePrice*0.018,trend=(rng()-0.45)*0.0025;for(let i=0;i<days;i++){p=Math.max(p*0.6,p+(rng()-0.5)*vol+trend*p);prices.push(+p.toFixed(2));}return prices;
}
function genDates(days){const d=[];const now=new Date();for(let i=days-1;i>=0;i--){const dt=new Date(now);dt.setDate(dt.getDate()-i);if(dt.getDay()!==0&&dt.getDay()!==6)d.push(dt);}return d;}
function getCurr(e){return e==='nasdaq'?'$':'₹';}
function fmtP(p,e){return e==='nasdaq'?`$${p.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`:`₹${p.toLocaleString('en-IN')}`;}
function getPrice(s){return genPrices(s,5)[4];}
function fmtDate(d,p){const m=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return p==='1M'?`${d.getDate()} ${m[d.getMonth()]}`:`${m[d.getMonth()]} ${d.getFullYear().toString().slice(-2)}`;}
function trendline(pr){const n=pr.length;let sx=0,sy=0,sxy=0,sx2=0;for(let i=0;i<n;i++){sx+=i;sy+=pr[i];sxy+=i*pr[i];sx2+=i*i;}const sl=(n*sxy-sx*sy)/(n*sx2-sx*sx),int=(sy-sl*sx)/n;return pr.map((_,i)=>+(sl*i+int).toFixed(2));}

// ==================== ANALYSIS (v2 — weighted, volume, fundamental-gated, sector-relative) ====================
function calcSMA(p,n){return p.length<n?null:p.slice(-n).reduce((a,b)=>a+b,0)/n;}
function calcEMA(p,n){if(p.length<n)return null;const k=2/(n+1);let e=p.slice(0,n).reduce((a,b)=>a+b,0)/n;for(let i=n;i<p.length;i++)e=p[i]*k+e*(1-k);return e;}
function calcRSI(p,n){if(p.length<n+1)return 50;let g=0,l=0;for(let i=p.length-n;i<p.length;i++){const d=p[i]-p[i-1];if(d>0)g+=d;else l-=d;}return l===0?100:100-100/(1+(g/n)/(l/n));}

// Gap 5: Trend strength multiplier based on distance from MA
function strengthFactor(cur,ma){
    if(!ma)return 1;
    const dist=Math.abs((cur-ma)/ma*100);
    if(dist<1)return 0.5;
    if(dist<3)return 0.8;
    if(dist<8)return 1.0;
    if(dist<15)return 1.2;
    return 0.9; // overextended — reduce confidence
}

// Gap 1: Volume generation (live or synthetic) and confirmation
function genVolume(stock,days){
    // Try live data first
    if(LIVE_DATA&&LIVE_DATA.stocks&&LIVE_DATA.stocks[stock.symbol]){
        const lv=LIVE_DATA.stocks[stock.symbol].volume;
        if(lv&&lv.length>=days)return lv.slice(-days);
        if(lv&&lv.length>0)return lv;
    }
    // Fallback to synthetic
    const rng=seededRng(hash(stock.symbol+'vol'+days));
    const vols=[];let base=1000000+rng()*5000000;
    for(let i=0;i<days;i++){base=Math.max(100000,base*(0.85+rng()*0.35));vols.push(Math.round(base));}
    return vols;
}
function volumeConfirmation(volumes){
    if(volumes.length<21)return 0;
    const recent=volumes[volumes.length-1];
    const avg20=volumes.slice(-21,-1).reduce((a,b)=>a+b,0)/20;
    if(recent>avg20*1.5)return 0.5;  // high volume confirms
    if(recent<avg20*0.6)return -0.5; // low volume weakens signal
    return 0;
}

// Gap 6: Sector-relative performance
function getSectorReturn10d(stock){
    const sectorStocks=(EXCHANGE_MAP[exch]||[]).filter(s=>s.sector===stock.sector&&s.symbol!==stock.symbol);
    if(sectorStocks.length<2)return 0;
    const sample=sectorStocks.slice(0,10);
    let sectorAvg=0;
    sample.forEach(s=>{const pr=genPrices(s,15);sectorAvg+=((pr[pr.length-1]-pr[pr.length-11])/pr[pr.length-11]*100);});
    sectorAvg/=sample.length;
    return sectorAvg;
}

// Gap 2: Fundamental quality score (0-3)
function getFundamentalQuality(stock){
    const f=genFund(stock);
    let q=0;
    if(f.pe<f.sectorPE)q+=1;       // cheaper than sector
    if(f.epsYoY>10)q+=1;           // growing earnings
    if(f.roce>15)q+=1;             // capital efficient
    return {q,f};
}

function getAnalysis(stock){
    const prices=genPrices(stock,260),cur=prices[prices.length-1];
    const sma20=calcSMA(prices,20),sma50=calcSMA(prices,50),sma200=calcSMA(prices,200);
    const ema12=calcEMA(prices,12),ema26=calcEMA(prices,26);
    const rsi=calcRSI(prices,14),macd=ema12&&ema26?ema12-ema26:0;
    const mom10=((cur-prices[prices.length-11])/prices[prices.length-11]*100);
    const volumes=genVolume(stock,260);

    let score=0;const inds=[];

    // Gap 4: Weighted MAs + Gap 5: Strength factor
    // SMA20 — weight 0.5
    const str20=strengthFactor(cur,sma20);
    if(cur>sma20){score+=0.5*str20;inds.push({n:'SMA20',s:'bullish'});}
    else{score-=0.5*str20;inds.push({n:'SMA20',s:'bearish'});}

    // SMA50 — weight 1.0
    const str50=strengthFactor(cur,sma50);
    if(cur>sma50){score+=1.0*str50;inds.push({n:'SMA50',s:'bullish'});}
    else{score-=1.0*str50;inds.push({n:'SMA50',s:'bearish'});}

    // SMA200 — weight 1.5
    if(sma200){
        const str200=strengthFactor(cur,sma200);
        if(cur>sma200){score+=1.5*str200;inds.push({n:'SMA200',s:'bullish'});}
        else{score-=1.5*str200;inds.push({n:'SMA200',s:'bearish'});}
    }

    // Gap 3: RSI gradient
    if(rsi<30){score+=1.5;inds.push({n:'RSI '+rsi.toFixed(0),s:'bullish'});}
    else if(rsi<40){score+=0.5;inds.push({n:'RSI '+rsi.toFixed(0),s:'bullish'});}
    else if(rsi>70){score-=1.5;inds.push({n:'RSI '+rsi.toFixed(0),s:'bearish'});}
    else if(rsi>60){score-=0.5;inds.push({n:'RSI '+rsi.toFixed(0),s:'bearish'});}
    else{inds.push({n:'RSI '+rsi.toFixed(0),s:'neutral'});}

    // MACD — weight 1.0
    if(macd>0){score+=1.0;inds.push({n:'MACD',s:'bullish'});}
    else{score-=1.0;inds.push({n:'MACD',s:'bearish'});}

    // Gap 4: Golden/Death Cross — weight 1.5
    if(sma50&&sma200){if(sma50>sma200){score+=1.5;inds.push({n:'Golden Cross',s:'bullish'});}else{score-=1.5;inds.push({n:'Death Cross',s:'bearish'});}}

    // Gap 1: Volume confirmation
    const volSignal=volumeConfirmation(volumes);
    if(volSignal!==0){
        score+=volSignal*(score>0?1:-1); // amplifies existing direction
        if(volSignal>0)inds.push({n:'Volume',s:'bullish'});
        else inds.push({n:'Volume',s:'bearish'});
    }

    // Gap 6: Sector-relative
    const sectorRet=getSectorReturn10d(stock);
    const stockRet10=mom10;
    const relPerf=stockRet10-sectorRet;
    if(relPerf>3){score+=0.5;inds.push({n:'Sector Rel.',s:'bullish'});}
    else if(relPerf<-3){score-=0.5;inds.push({n:'Sector Rel.',s:'bearish'});}

    // Gap 2: Fundamental quality gate
    const {q:fundQuality}=getFundamentalQuality(stock);

    // Determine signal with adjusted thresholds (max score ~8.5, threshold 3)
    let signal='HOLD',rationale=[];
    const buyThresh=fundQuality===3?2.5:3.0;  // excellent fundamentals = lower bar
    const sellThresh=fundQuality===3?-4.0:-3.0; // excellent fundamentals = harder to sell

    if(score>=buyThresh){
        signal='BUY';
        if(fundQuality===0){signal='HOLD';rationale.push({t:'Technicals bullish BUT fundamentals weak (P/E, EPS, ROCE poor) — hold until quality improves',c:'yellow'});}
        else{
            if(cur>sma20&&sma20>sma50)rationale.push({t:'Uptrend confirmed: Price > SMA20 > SMA50',c:'green'});
            if(sma200&&cur>sma200)rationale.push({t:'Above SMA200 — long-term bullish structure',c:'green'});
            if(rsi<60)rationale.push({t:'RSI '+rsi.toFixed(0)+' — room to run before overbought',c:'green'});
            if(macd>0)rationale.push({t:'MACD positive — momentum building',c:'green'});
            if(mom10>2)rationale.push({t:'10-day momentum +'+mom10.toFixed(1)+'% — strength',c:'green'});
            if(volSignal>0)rationale.push({t:'High volume confirms breakout',c:'green'});
            if(relPerf>3)rationale.push({t:'Outperforming sector by +'+relPerf.toFixed(1)+'% (10d)',c:'green'});
            if(fundQuality>=2)rationale.push({t:'Strong fundamentals support entry (quality '+fundQuality+'/3)',c:'green'});
        }
    }else if(score<=sellThresh){
        signal='SELL';
        if(cur<sma20&&sma20<sma50)rationale.push({t:'Downtrend: Price < SMA20 < SMA50',c:'red'});
        if(sma200&&cur<sma200)rationale.push({t:'Below SMA200 — long-term bearish',c:'red'});
        if(rsi>70)rationale.push({t:'RSI '+rsi.toFixed(0)+' — overbought, reversal likely',c:'red'});
        else if(rsi>60)rationale.push({t:'RSI '+rsi.toFixed(0)+' — momentum fading',c:'red'});
        if(macd<0)rationale.push({t:'MACD negative — bearish momentum',c:'red'});
        if(mom10<-2)rationale.push({t:'10-day momentum '+mom10.toFixed(1)+'% — weakness',c:'red'});
        if(volSignal<0)rationale.push({t:'Low volume on decline — conviction weak but trend intact',c:'red'});
        if(relPerf<-3)rationale.push({t:'Underperforming sector by '+relPerf.toFixed(1)+'% (10d)',c:'red'});
    }else{
        rationale.push({t:'Score '+score.toFixed(1)+' — between thresholds, no clear edge',c:'yellow'});
        if(Math.abs(mom10)<2)rationale.push({t:'Flat momentum ('+mom10.toFixed(1)+'%) — consolidation phase',c:'yellow'});
        if(rsi>45&&rsi<55)rationale.push({t:'RSI neutral at '+rsi.toFixed(0)+' — wait for breakout direction',c:'yellow'});
        if(fundQuality>=2)rationale.push({t:'Fundamentals strong ('+fundQuality+'/3) — watch for technical entry',c:'yellow'});
        else rationale.push({t:'Hold and monitor for trend confirmation',c:'yellow'});
    }

    const support=Math.min(...prices.slice(-20))*0.98,resistance=Math.max(...prices.slice(-20))*1.02;
    const target=signal==='BUY'?cur*1.08:signal==='SELL'?cur*0.92:cur;
    return {signal,score,inds,rationale,support,resistance,target,cur,rsi,mom10,fundQuality,relPerf:relPerf.toFixed(1)};
}
function getSignal(s){return getAnalysis(s).signal;}

// ==================== FUNDAMENTALS ====================
function genFund(stock){
    // Try live fundamentals first
    if(LIVE_FUND&&LIVE_FUND.stocks&&LIVE_FUND.stocks[stock.symbol]){
        const lf=LIVE_FUND.stocks[stock.symbol];
        // Map live data to expected structure, fill gaps with simulated
        const rng=seededRng(hash(stock.symbol+'fund2'));
        const fallback=genFundSimulated(stock);
        return {
            pe:lf.pe||fallback.pe,
            eps:lf.eps||fallback.eps,
            epsYoY:fallback.epsYoY, // yfinance doesn't provide YoY directly
            epsQoQ:fallback.epsQoQ,
            revTTM:lf.revenue?Math.round(lf.revenue/10000000):fallback.revTTM, // convert to Cr
            revYoY:fallback.revYoY,
            netProfit:fallback.netProfit,
            profitYoY:fallback.profitYoY,
            profitMargin:lf.profitMargin||fallback.profitMargin,
            roce:lf.roce||fallback.roce,
            roe:lf.roe||fallback.roe,
            debtEq:lf.debtEquity?+(lf.debtEquity/100).toFixed(2):fallback.debtEq,
            divYield:lf.dividendYield||fallback.divYield,
            pb:lf.pb||fallback.pb,
            fcfYield:fallback.fcfYield,
            sectorPE:fallback.sectorPE
        };
    }
    return genFundSimulated(stock);
}
function genFundSimulated(stock){
    const rng=seededRng(hash(stock.symbol+'fund2'));const sec=stock.sector;
    let peB=22,epsB=40,revB=10000,pmB=14,roceB=15;
    if(sec.includes('IT')||sec==='Technology'||sec==='Software'){peB=28;epsB=45;revB=15000;pmB=22;roceB=28;}
    else if(sec.includes('Bank')||sec==='Finance'||sec.includes('Fintech')){peB=18;epsB=60;revB=45000;pmB=18;roceB=12;}
    else if(sec==='FMCG'||sec==='Consumer'||sec==='Retail'){peB=55;epsB=30;revB=12000;pmB=16;roceB=35;}
    else if(sec==='Pharma'||sec==='Healthcare'||sec==='Biotech'){peB=32;epsB=38;revB=8000;pmB=20;roceB=22;}
    else if(sec.includes('Auto')||sec.includes('EV')){peB=25;epsB=55;revB=30000;pmB=10;roceB=18;}
    else if(sec==='Energy'||sec==='Power'||sec.includes('Oil')){peB=12;epsB=70;revB=60000;pmB=8;roceB=14;}
    else if(sec==='Semiconductors'||sec==='Hardware'){peB=40;epsB=5;revB=25000;pmB=28;roceB=25;}
    else if(sec==='E-Commerce'||sec==='Internet'){peB=80;epsB=3;revB=8000;pmB=5;roceB=8;}
    else if(sec.includes('Cloud')||sec.includes('Cyber')){peB=60;epsB=4;revB=5000;pmB=12;roceB=15;}
    else if(sec.includes('AI')){peB=70;epsB=2;revB=3000;pmB=8;roceB=10;}
    else if(sec==='Defence'){peB=35;epsB=30;revB=15000;pmB=15;roceB=20;}
    else if(sec==='Cement'||sec==='Metals'||sec==='Mining'){peB=15;epsB=50;revB=25000;pmB=12;roceB=16;}
    if(stock.currency==='$')revB*=5;
    const pe=+(peB+(rng()-0.4)*20).toFixed(1),eps=+(epsB+(rng()-0.3)*epsB*0.5).toFixed(1);
    const epsYoY=+((rng()-0.3)*40).toFixed(1),epsQoQ=+((rng()-0.35)*20).toFixed(1);
    const revTTM=Math.round(revB*(0.8+rng()*0.6)),revYoY=+((rng()-0.3)*25).toFixed(1);
    const netProfit=Math.round(revTTM*(pmB/100)*(0.8+rng()*0.5)),profitYoY=+((rng()-0.35)*35).toFixed(1);
    const profitMargin=+(pmB+(rng()-0.4)*12).toFixed(1),roce=+(roceB+(rng()-0.4)*15).toFixed(1);
    const roe=+(12+rng()*20).toFixed(1),debtEq=+(rng()*1.5).toFixed(2),divYield=+(rng()*3.5).toFixed(1);
    const pb=+((stock.basePrice/(stock.basePrice*(0.3+rng()*0.5)))).toFixed(1);
    const fcfYield=+(2+rng()*6).toFixed(1),sectorPE=+(peB+(rng()-0.5)*5).toFixed(1);
    return {pe,eps,epsYoY,epsQoQ,revTTM,revYoY,netProfit,profitYoY,profitMargin,roce,roe,debtEq,divYield,pb,fcfYield,sectorPE};
}
function getRecReason(sig,f){const r=[];if(sig==='BUY'){if(f.pe<25)r.push('P/E '+f.pe+'x undervalued');if(f.epsYoY>10)r.push('EPS +'+f.epsYoY+'% YoY');if(f.revYoY>10)r.push('Rev +'+f.revYoY+'%');if(f.roce>20)r.push('ROCE '+f.roce+'%');if(!r.length)r.push('Technicals favor entry');}else if(sig==='SELL'){if(f.pe>50)r.push('P/E '+f.pe+'x stretched');if(f.epsYoY<-5)r.push('EPS '+f.epsYoY+'%');if(f.revYoY<0)r.push('Rev '+f.revYoY+'%');if(!r.length)r.push('Technical breakdown');}else{r.push('P/E '+f.pe+'x fair');r.push('Wait for trend clarity');}return r.slice(0,3).join(' | ');}

// ==================== STATE ====================
let exch='nse',cap='all',sector='all',vf='all',selStock=null,period='1M',chart=null;
function getStocks(){return (EXCHANGE_MAP[exch]||[]).filter(s=>(cap==='all'||s.cap===cap)&&(sector==='all'||s.sector===sector));}
function getSectors(){const secs=new Set();(EXCHANGE_MAP[exch]||[]).forEach(s=>secs.add(s.sector));return [...secs].sort();}
function updateSectorDropdown(){const sel=document.getElementById('sectorFilter');const secs=getSectors();sel.innerHTML='<option value="all">All Sectors ('+secs.length+')</option>'+secs.map(s=>'<option value="'+s+'">'+s+'</option>').join('');}

// ==================== RENDER SUMMARY ====================
function renderSummary(){
    const stocks=getStocks();
    const analyzed=stocks.map(s=>({stock:s,signal:getSignal(s),fund:genFund(s),price:getPrice(s)}));
    analyzed.forEach(a=>a.reason=getRecReason(a.signal,a.fund));
    const buy=analyzed.filter(a=>a.signal==='BUY'),hold=analyzed.filter(a=>a.signal==='HOLD'),sell=analyzed.filter(a=>a.signal==='SELL');
    document.getElementById('filterInfo').textContent=stocks.length+' stocks | '+exch.toUpperCase()+' | '+(cap==='all'?'All Caps':cap.charAt(0).toUpperCase()+cap.slice(1))+' | '+(sector==='all'?'All Sectors':sector);
    if(vf==='sectors'){renderSectors(analyzed);return;}
    const curr=getCurr(exch);
    let html='<div class="counts"><div class="count-card" style="border-left:3px solid #10b981"><div class="cc-l">Buy</div><div class="cc-v positive">'+buy.length+'</div></div><div class="count-card" style="border-left:3px solid #f59e0b"><div class="cc-l">Hold</div><div class="cc-v neutral">'+hold.length+'</div></div><div class="count-card" style="border-left:3px solid #ef4444"><div class="cc-l">Sell</div><div class="cc-v negative">'+sell.length+'</div></div></div>';
    function renderGrp(items,sig){if(!items.length)return '';const lbl=sig==='BUY'?'Buy':sig==='SELL'?'Sell':'Hold';const bc=lbl.toLowerCase();
    return '<div class="sec-hdr"><h3>'+lbl+'</h3><span class="cnt badge-'+bc+'">'+items.length+'</span></div><div class="grid">'+items.map(a=>{const f=a.fund;return '<div class="card b-'+bc+'" data-sym="'+a.stock.symbol+'"><div class="card-hdr"><div><span class="c-sym">'+a.stock.symbol+'</span><span class="c-name">'+a.stock.name+'</span></div><span class="badge badge-'+bc+'">'+lbl.toUpperCase()+'</span></div><div class="card-metrics"><div class="cm"><div class="cm-l">P/E (TTM)</div><div class="cm-v">'+f.pe+'x</div><div class="cm-t" style="color:#6b7280">Sec: '+f.sectorPE+'x</div></div><div class="cm"><div class="cm-l">EPS</div><div class="cm-v">'+curr+f.eps+'</div><div class="cm-t '+(f.epsYoY>=0?'positive':'negative')+'">'+(f.epsYoY>=0?'+':'')+f.epsYoY+'% YoY</div></div><div class="cm"><div class="cm-l">Revenue</div><div class="cm-v">'+(f.revTTM/1000).toFixed(1)+'K</div><div class="cm-t '+(f.revYoY>=0?'positive':'negative')+'">'+(f.revYoY>=0?'+':'')+f.revYoY+'% YoY</div></div><div class="cm"><div class="cm-l">Profit</div><div class="cm-v">'+f.profitMargin+'%</div><div class="cm-t '+(f.profitYoY>=0?'positive':'negative')+'">'+(f.profitYoY>=0?'+':'')+f.profitYoY+'% YoY</div></div><div class="cm"><div class="cm-l">ROCE</div><div class="cm-v">'+f.roce+'%</div></div></div><div class="card-why"><strong>Why '+lbl+':</strong> '+a.reason+'</div></div>';}).join('')+'</div>';}
    if(vf==='all'){html+=renderGrp(buy,'BUY')+renderGrp(hold,'HOLD')+renderGrp(sell,'SELL');}
    else if(vf==='buy'){html+=renderGrp(buy,'BUY');}else if(vf==='sell'){html+=renderGrp(sell,'SELL');}else if(vf==='hold'){html+=renderGrp(hold,'HOLD');}
    document.getElementById('summaryContent').innerHTML=html;
    document.querySelectorAll('.card').forEach(c=>c.addEventListener('click',function(){selStock=(EXCHANGE_MAP[exch]||[]).find(s=>s.symbol===this.dataset.sym);showDetail();}));
}

// ==================== SECTOR VIEW ====================
function renderSectors(analyzed){const map={};analyzed.forEach(a=>{if(!map[a.stock.sector])map[a.stock.sector]=[];map[a.stock.sector].push(a);});const secs=Object.entries(map).map(function(e){const name=e[0],items=e[1];const bc=items.filter(i=>i.signal==='BUY').length,sc=items.filter(i=>i.signal==='SELL').length;const avgPE=(items.reduce((s,i)=>s+i.fund.pe,0)/items.length).toFixed(1);const avgEPS=(items.reduce((s,i)=>s+i.fund.epsYoY,0)/items.length).toFixed(1);const avgRev=(items.reduce((s,i)=>s+i.fund.revYoY,0)/items.length).toFixed(1);const avgProfit=(items.reduce((s,i)=>s+i.fund.profitYoY,0)/items.length).toFixed(1);const avgROCE=(items.reduce((s,i)=>s+i.fund.roce,0)/items.length).toFixed(1);const raw=(bc*2-sc*2)/items.length;const score=((raw+2)/4*100).toFixed(0);const verdict=raw>0.5?'BUY':raw<-0.5?'AVOID':'NEUTRAL';return {name,items,bc,sc,avgPE,avgEPS,avgRev,avgProfit,avgROCE,score,verdict};}).sort((a,b)=>b.score-a.score);
let html='<p style="font-size:10px;color:#6b7280;margin-bottom:12px">Ranked by composite score (YoY, TTM basis) | '+(cap==='all'?'All Caps':cap)+'</p>';
secs.forEach(function(s){const col=s.verdict==='BUY'?'#10b981':s.verdict==='AVOID'?'#ef4444':'#f59e0b';const cls=s.verdict==='BUY'?'badge-buy':s.verdict==='AVOID'?'badge-sell':'badge-hold';let reason=s.verdict==='BUY'?[+s.avgEPS>5?'EPS +'+s.avgEPS+'%':'',+s.avgRev>5?'Rev +'+s.avgRev+'%':'',+s.avgROCE>18?'ROCE '+s.avgROCE+'%':''].filter(Boolean).join(' | ')||'Positive momentum':s.verdict==='AVOID'?[+s.avgEPS<0?'EPS '+s.avgEPS+'%':'',+s.avgRev<0?'Rev '+s.avgRev+'%':''].filter(Boolean).join(' | ')||'Weak momentum':'Mixed: '+s.bc+' Buy, '+(s.items.length-s.bc-s.sc)+' Hold, '+s.sc+' Sell';
html+='<div class="sector-card"><div class="sh"><h4>'+s.name+' ('+s.items.length+')</h4><span class="badge '+cls+'">'+s.verdict+'</span></div><div class="sector-bar"><div class="bt"><div class="bf" style="width:'+s.score+'%;background:'+col+'"></div></div><span class="bs">'+s.score+'/100</span></div><div class="sector-metrics"><div class="sm"><div class="sl">Avg P/E</div><div class="sv">'+s.avgPE+'x</div></div><div class="sm"><div class="sl">EPS YoY</div><div class="sv '+(+s.avgEPS>=0?'positive':'negative')+'">'+(+s.avgEPS>=0?'+':'')+s.avgEPS+'%</div></div><div class="sm"><div class="sl">Rev YoY</div><div class="sv '+(+s.avgRev>=0?'positive':'negative')+'">'+(+s.avgRev>=0?'+':'')+s.avgRev+'%</div></div><div class="sm"><div class="sl">Profit YoY</div><div class="sv '+(+s.avgProfit>=0?'positive':'negative')+'">'+(+s.avgProfit>=0?'+':'')+s.avgProfit+'%</div></div><div class="sm"><div class="sl">ROCE</div><div class="sv">'+s.avgROCE+'%</div></div></div><div class="sector-reason"><strong>Rationale:</strong> '+reason+'</div><div class="sector-stocks">'+s.items.map(i=>'<span style="color:'+(i.signal==='BUY'?'#10b981':i.signal==='SELL'?'#ef4444':'#f59e0b')+'" data-sym="'+i.stock.symbol+'" class="ss">'+i.stock.symbol+'</span>').join('')+'</div></div>';});
document.getElementById('summaryContent').innerHTML=html;document.querySelectorAll('.ss').forEach(el=>el.addEventListener('click',function(){selStock=(EXCHANGE_MAP[exch]||[]).find(s=>s.symbol===this.dataset.sym);showDetail();}));}

// ==================== DETAIL VIEW ====================
function showDetail(){document.getElementById('summaryView').style.display='none';document.getElementById('detailView').style.display='block';renderDetail();}
function showSummary(){selStock=null;document.getElementById('detailView').style.display='none';document.getElementById('summaryView').style.display='block';renderSummary();}
function renderDetail(){if(!selStock)return;const days=period==='1M'?30:period==='6M'?180:365;const td=genDates(days),prices=genPrices(selStock,td.length),trend=trendline(prices);const cur=prices[prices.length-1],start=prices[0],chg=cur-start,pct=((chg/start)*100).toFixed(2),pos=chg>=0;
document.getElementById('dSym').textContent=selStock.symbol;document.getElementById('dName').textContent=selStock.name+' • '+selStock.sector+' • '+exch.toUpperCase()+' • '+selStock.cap.charAt(0).toUpperCase()+selStock.cap.slice(1)+' Cap';
document.getElementById('dPrice').textContent=fmtP(cur,exch);document.getElementById('dChg').innerHTML='<span class="'+(pos?'positive':'negative')+'">'+(pos?'+':'')+fmtP(Math.abs(chg),exch)+' ('+(pos?'+':'')+pct+'%)</span>';
if(chart)chart.destroy();const ctx=document.getElementById('stockChart').getContext('2d');const color=pos?'#10b981':'#ef4444';
chart=new Chart(ctx,{type:'line',data:{labels:td.map(d=>fmtDate(d,period)),datasets:[{label:'Price',data:prices,borderColor:color,backgroundColor:color+'12',borderWidth:1.5,fill:true,tension:.1,pointRadius:0,pointHoverRadius:3},{label:'Trend',data:trend,borderColor:'#6366f1',borderWidth:1.5,borderDash:[5,3],fill:false,tension:0,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{display:true,position:'top',align:'end',labels:{color:'#6b7280',usePointStyle:true,pointStyle:'line',font:{size:9}}},tooltip:{backgroundColor:'#1e1b4b',titleFont:{size:10},bodyFont:{size:10}}},scales:{x:{grid:{color:'#1f2937'},ticks:{color:'#6b7280',maxTicksLimit:6,font:{size:8}}},y:{grid:{color:'#1f2937'},ticks:{color:'#6b7280',font:{size:8},callback:function(v){return getCurr(exch)+v.toLocaleString();}}}}}});
const f=genFund(selStock),c=getCurr(exch),hi=Math.max(...prices),lo=Math.min(...prices);
document.getElementById('fundPanel').innerHTML='<h4>Fundamentals & Valuation</h4><div class="fund-grid"><div class="fg"><div class="fg-l">P/E (TTM)</div><div class="fg-v">'+f.pe+'x</div><div class="fg-note">Sector: '+f.sectorPE+'x</div></div><div class="fg"><div class="fg-l">P/B</div><div class="fg-v">'+f.pb+'x</div></div><div class="fg"><div class="fg-l">EPS (TTM)</div><div class="fg-v">'+c+f.eps+'</div><div class="fg-t '+(f.epsYoY>=0?'positive':'negative')+'">'+(f.epsYoY>=0?'+':'')+f.epsYoY+'% YoY</div></div><div class="fg"><div class="fg-l">EPS QoQ</div><div class="fg-v '+(f.epsQoQ>=0?'positive':'negative')+'">'+(f.epsQoQ>=0?'+':'')+f.epsQoQ+'%</div></div><div class="fg"><div class="fg-l">Revenue (TTM)</div><div class="fg-v">'+(f.revTTM/1000).toFixed(1)+'K</div><div class="fg-t '+(f.revYoY>=0?'positive':'negative')+'">'+(f.revYoY>=0?'+':'')+f.revYoY+'% YoY</div></div><div class="fg"><div class="fg-l">Net Profit</div><div class="fg-v">'+(f.netProfit/1000).toFixed(1)+'K</div><div class="fg-t '+(f.profitYoY>=0?'positive':'negative')+'">'+(f.profitYoY>=0?'+':'')+f.profitYoY+'% YoY</div></div><div class="fg"><div class="fg-l">Profit Margin</div><div class="fg-v">'+f.profitMargin+'%</div></div><div class="fg"><div class="fg-l">ROCE</div><div class="fg-v">'+f.roce+'%</div></div><div class="fg"><div class="fg-l">ROE</div><div class="fg-v">'+f.roe+'%</div></div><div class="fg"><div class="fg-l">Debt/Equity</div><div class="fg-v">'+f.debtEq+'</div></div><div class="fg"><div class="fg-l">Div Yield</div><div class="fg-v">'+f.divYield+'%</div></div><div class="fg"><div class="fg-l">FCF Yield</div><div class="fg-v">'+f.fcfYield+'%</div></div><div class="fg"><div class="fg-l">Period High</div><div class="fg-v positive">'+fmtP(hi,exch)+'</div></div><div class="fg"><div class="fg-l">Period Low</div><div class="fg-v negative">'+fmtP(lo,exch)+'</div></div><div class="fg"><div class="fg-l">52W Range</div><div class="fg-v" style="font-size:9px">'+fmtP(lo*.97,exch)+' - '+fmtP(hi*1.03,exch)+'</div></div></div>';
const a=getAnalysis(selStock);const sigCls=a.signal==='BUY'?'sig-buy':a.signal==='SELL'?'sig-sell':'sig-hold';
document.getElementById('techPanel').innerHTML='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><h4 style="margin:0">Technical Analysis & Recommendation</h4><div class="rec-signal '+sigCls+'">'+a.signal+'</div></div><div class="tech-inds">'+a.inds.map(i=>'<div class="ti"><span class="ti-n">'+i.n+'</span><span class="ti-s '+i.s+'">'+i.s+'</span></div>').join('')+'</div><ul class="rec-rationale">'+a.rationale.map(r=>'<li class="'+r.c+'">'+r.t+'</li>').join('')+'</ul><div class="rec-targets"><div class="rt"><div class="rt-l">Support</div><div class="rt-v negative">'+fmtP(+a.support.toFixed(2),exch)+'</div></div><div class="rt"><div class="rt-l">Target</div><div class="rt-v positive">'+fmtP(+a.target.toFixed(2),exch)+'</div></div><div class="rt"><div class="rt-l">Stop Loss</div><div class="rt-v neutral">'+fmtP(+(a.support*0.97).toFixed(2),exch)+'</div></div></div>';}

// ==================== PORTFOLIO ====================
function renderPortfolio(){let ti=0,tc=0;const rows=portfolio.map(function(item){const stocks=EXCHANGE_MAP[item.exchange]||[];const stock=stocks.find(s=>s.symbol===item.symbol);if(!stock)return null;const cp=getPrice(stock),inv=item.qty*item.avgPrice,cur=item.qty*cp,pnl=cur-inv;ti+=inv;tc+=cur;return Object.assign({},item,{stock:stock,cp:cp,inv:inv,cur:cur,pnl:pnl,pnlPct:((pnl/inv)*100).toFixed(2),signal:getSignal(stock)});}).filter(Boolean);
const tpnl=tc-ti,tpct=ti>0?((tpnl/ti)*100).toFixed(2):0;
document.getElementById('portSummary').innerHTML='<div class="ps-card"><div class="ps-l">Invested</div><div class="ps-v">₹'+ti.toLocaleString('en-IN')+'</div></div><div class="ps-card"><div class="ps-l">Current</div><div class="ps-v">₹'+tc.toLocaleString('en-IN')+'</div></div><div class="ps-card"><div class="ps-l">P&L</div><div class="ps-v '+(tpnl>=0?'positive':'negative')+'">'+(tpnl>=0?'+':'')+'₹'+Math.abs(tpnl).toLocaleString('en-IN')+' ('+(tpnl>=0?'+':'')+tpct+'%)</div></div><div class="ps-card"><div class="ps-l">Signals</div><div class="ps-v"><span class="positive">'+rows.filter(r=>r.signal==='BUY').length+' Buy</span> / <span class="negative">'+rows.filter(r=>r.signal==='SELL').length+' Sell</span></div></div>';
document.getElementById('portBody').innerHTML=rows.map(r=>'<tr data-sym="'+r.symbol+'" data-exch="'+r.exchange+'"><td><strong>'+r.symbol+'</strong><br><span style="font-size:9px;color:#6b7280">'+r.stock.name+'</span></td><td>'+r.exchange.toUpperCase()+'</td><td>'+r.qty+'</td><td>'+fmtP(r.avgPrice,r.exchange)+'</td><td>'+fmtP(r.cp,r.exchange)+'</td><td class="'+(r.pnl>=0?'positive':'negative')+'">'+(r.pnl>=0?'+':'')+fmtP(Math.abs(r.pnl),r.exchange)+' ('+(r.pnl>=0?'+':'')+r.pnlPct+'%)</td><td><span class="badge badge-'+r.signal.toLowerCase()+'">'+r.signal+'</span></td><td><span class="alert-dot '+r.signal.toLowerCase()+'"></span></td></tr>').join('');
document.querySelectorAll('#portBody tr').forEach(row=>row.addEventListener('click',function(){exch=this.dataset.exch;selStock=(EXCHANGE_MAP[exch]||[]).find(s=>s.symbol===this.dataset.sym);document.querySelectorAll('.nav-tab').forEach(t=>t.classList.toggle('active',t.dataset.view===exch));document.getElementById('portfolioView').style.display='none';document.getElementById('mainView').style.display='block';showDetail();}));}

// ==================== EVENTS ====================
document.querySelectorAll('.nav-tab').forEach(t=>t.addEventListener('click',function(){document.querySelectorAll('.nav-tab').forEach(x=>x.classList.remove('active'));this.classList.add('active');const v=this.dataset.view;if(v==='portfolio'){document.getElementById('mainView').style.display='none';document.getElementById('portfolioView').style.display='block';renderPortfolio();}else{exch=v;selStock=null;document.getElementById('portfolioView').style.display='none';document.getElementById('mainView').style.display='block';document.getElementById('detailView').style.display='none';document.getElementById('summaryView').style.display='block';updateSectorDropdown();renderSummary();}}));
document.querySelectorAll('.cap-tab').forEach(t=>t.addEventListener('click',function(){document.querySelectorAll('.cap-tab').forEach(x=>x.classList.remove('active'));this.classList.add('active');cap=this.dataset.cap;renderSummary();}));
document.getElementById('sectorFilter').addEventListener('change',function(){sector=this.value;renderSummary();});
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',function(){document.querySelectorAll('.filter-btn').forEach(x=>{x.classList.remove('active','buy-active','sell-active','hold-active');});this.classList.add('active');if(this.dataset.vf==='buy')this.classList.add('buy-active');else if(this.dataset.vf==='sell')this.classList.add('sell-active');else if(this.dataset.vf==='hold')this.classList.add('hold-active');vf=this.dataset.vf;renderSummary();}));
document.querySelectorAll('.tb').forEach(b=>b.addEventListener('click',function(){document.querySelectorAll('.tb').forEach(x=>x.classList.remove('active'));this.classList.add('active');period=this.dataset.p;renderDetail();}));
document.getElementById('backBtn').addEventListener('click',showSummary);
document.getElementById('addBtn').addEventListener('click',function(){document.getElementById('addModal').classList.add('show');});
document.getElementById('mCancel').addEventListener('click',function(){document.getElementById('addModal').classList.remove('show');});
document.getElementById('addModal').addEventListener('click',function(e){if(e.target===document.getElementById('addModal'))document.getElementById('addModal').classList.remove('show');});
document.getElementById('mAdd').addEventListener('click',function(){const exchange=document.getElementById('mExch').value,symbol=document.getElementById('mSym').value.trim().toUpperCase(),qty=parseInt(document.getElementById('mQty').value),avgPrice=parseFloat(document.getElementById('mPrice').value);if(!symbol||!qty||!avgPrice){alert('Fill all fields');return;}portfolio.push({symbol:symbol,exchange:exchange,qty:qty,avgPrice:avgPrice});savePortfolio(portfolio);renderPortfolio();document.getElementById('addModal').classList.remove('show');document.getElementById('mSym').value='';document.getElementById('mQty').value='';document.getElementById('mPrice').value='';});

// ==================== INIT ====================
async function init(){
    try{
        await loadLiveData();
        updateSectorDropdown();
        renderSummary();
        if(LIVE_DATA){
            const badge=document.createElement('span');
            badge.style.cssText='font-size:9px;color:#10b981;margin-left:12px;opacity:0.8';
            badge.textContent='LIVE DATA: '+new Date(LIVE_DATA.updated).toLocaleDateString();
            document.querySelector('.header h1').appendChild(badge);
        }
    }catch(e){
        document.getElementById('summaryContent').innerHTML='<div style="color:#ef4444;padding:20px;font-size:14px"><strong>Error:</strong> '+e.message+'<br><br><pre>'+e.stack+'</pre></div>';
        console.error('Dashboard init error:',e);
    }
}
init();
