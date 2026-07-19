
const NSE_STOCKS = [
  // ===== LARGE CAP (50 stocks) - Nifty 50 Constituents =====
  {symbol:'RELIANCE',name:'Reliance Industries Ltd',sector:'Energy',cap:'large',basePrice:2950},
  {symbol:'TCS',name:'Tata Consultancy Services Ltd',sector:'IT',cap:'large',basePrice:3850},
  {symbol:'HDFCBANK',name:'HDFC Bank Ltd',sector:'Banking',cap:'large',basePrice:1720},
  {symbol:'INFY',name:'Infosys Ltd',sector:'IT',cap:'large',basePrice:1580},
  {symbol:'ICICIBANK',name:'ICICI Bank Ltd',sector:'Banking',cap:'large',basePrice:1280},
  {symbol:'HINDUNILVR',name:'Hindustan Unilever Ltd',sector:'FMCG',cap:'large',basePrice:2480},
  {symbol:'ITC',name:'ITC Ltd',sector:'FMCG',cap:'large',basePrice:465},
  {symbol:'SBIN',name:'State Bank of India',sector:'Banking',cap:'large',basePrice:820},
  {symbol:'BHARTIARTL',name:'Bharti Airtel Ltd',sector:'Telecom',cap:'large',basePrice:1650},
  {symbol:'KOTAKBANK',name:'Kotak Mahindra Bank Ltd',sector:'Banking',cap:'large',basePrice:1850},
  {symbol:'LT',name:'Larsen & Toubro Ltd',sector:'Infrastructure',cap:'large',basePrice:3520},
  {symbol:'AXISBANK',name:'Axis Bank Ltd',sector:'Banking',cap:'large',basePrice:1150},
  {symbol:'BAJFINANCE',name:'Bajaj Finance Ltd',sector:'Finance',cap:'large',basePrice:6800},
  {symbol:'MARUTI',name:'Maruti Suzuki India Ltd',sector:'Auto',cap:'large',basePrice:12500},
  {symbol:'TITAN',name:'Titan Company Ltd',sector:'Consumer',cap:'large',basePrice:3250},
  {symbol:'SUNPHARMA',name:'Sun Pharmaceutical Industries Ltd',sector:'Pharma',cap:'large',basePrice:1180},
  {symbol:'TATAMOTORS',name:'Tata Motors Ltd',sector:'Auto',cap:'large',basePrice:950},
  {symbol:'HCLTECH',name:'HCL Technologies Ltd',sector:'IT',cap:'large',basePrice:1520},
  {symbol:'NTPC',name:'NTPC Ltd',sector:'Power',cap:'large',basePrice:365},
  {symbol:'POWERGRID',name:'Power Grid Corporation of India Ltd',sector:'Power',cap:'large',basePrice:310},
  {symbol:'TATASTEEL',name:'Tata Steel Ltd',sector:'Metals',cap:'large',basePrice:155},
  {symbol:'ADANIENT',name:'Adani Enterprises Ltd',sector:'Infrastructure',cap:'large',basePrice:3100},
  {symbol:'NESTLEIND',name:'Nestle India Ltd',sector:'FMCG',cap:'large',basePrice:2400},
  {symbol:'ULTRACEMCO',name:'UltraTech Cement Ltd',sector:'Cement',cap:'large',basePrice:10200},
  {symbol:'WIPRO',name:'Wipro Ltd',sector:'IT',cap:'large',basePrice:480},
  {symbol:'M&M',name:'Mahindra & Mahindra Ltd',sector:'Auto',cap:'large',basePrice:2680},
  {symbol:'ONGC',name:'Oil and Natural Gas Corporation Ltd',sector:'Energy',cap:'large',basePrice:265},
  {symbol:'JSWSTEEL',name:'JSW Steel Ltd',sector:'Metals',cap:'large',basePrice:880},
  {symbol:'COALINDIA',name:'Coal India Ltd',sector:'Mining',cap:'large',basePrice:440},
  {symbol:'BAJAJFINSV',name:'Bajaj Finserv Ltd',sector:'Finance',cap:'large',basePrice:1680},
  {symbol:'DRREDDY',name:'Dr Reddys Laboratories Ltd',sector:'Pharma',cap:'large',basePrice:5900},
  {symbol:'CIPLA',name:'Cipla Ltd',sector:'Pharma',cap:'large',basePrice:1480},
  {symbol:'DIVISLAB',name:'Divi\'s Laboratories Ltd',sector:'Pharma',cap:'large',basePrice:3750},
  {symbol:'GRASIM',name:'Grasim Industries Ltd',sector:'Cement',cap:'large',basePrice:2350},
  {symbol:'BRITANNIA',name:'Britannia Industries Ltd',sector:'FMCG',cap:'large',basePrice:5100},
  {symbol:'HEROMOTOCO',name:'Hero MotoCorp Ltd',sector:'Auto',cap:'large',basePrice:4600},
  {symbol:'EICHERMOT',name:'Eicher Motors Ltd',sector:'Auto',cap:'large',basePrice:4200},
  {symbol:'APOLLOHOSP',name:'Apollo Hospitals Enterprise Ltd',sector:'Healthcare',cap:'large',basePrice:5800},
  {symbol:'BPCL',name:'Bharat Petroleum Corporation Ltd',sector:'Energy',cap:'large',basePrice:340},
  {symbol:'TATACONSUM',name:'Tata Consumer Products Ltd',sector:'FMCG',cap:'large',basePrice:1050},
  {symbol:'SBILIFE',name:'SBI Life Insurance Company Ltd',sector:'Insurance',cap:'large',basePrice:1520},
  {symbol:'INDUSINDBK',name:'IndusInd Bank Ltd',sector:'Banking',cap:'large',basePrice:1450},
  {symbol:'HDFCLIFE',name:'HDFC Life Insurance Company Ltd',sector:'Insurance',cap:'large',basePrice:640},
  {symbol:'ADANIPORTS',name:'Adani Ports and Special Economic Zone Ltd',sector:'Infrastructure',cap:'large',basePrice:1250},
  {symbol:'HINDALCO',name:'Hindalco Industries Ltd',sector:'Metals',cap:'large',basePrice:580},
  {symbol:'BAJAJ-AUTO',name:'Bajaj Auto Ltd',sector:'Auto',cap:'large',basePrice:8900},
  {symbol:'TECHM',name:'Tech Mahindra Ltd',sector:'IT',cap:'large',basePrice:1380},
  {symbol:'ASIANPAINT',name:'Asian Paints Ltd',sector:'Consumer',cap:'large',basePrice:2850},
  {symbol:'UPL',name:'UPL Ltd',sector:'Chemicals',cap:'large',basePrice:520},
  {symbol:'SHRIRAMFIN',name:'Shriram Finance Ltd',sector:'Finance',cap:'large',basePrice:2400},

  // ===== MID CAP (150 stocks) - Nifty Midcap 150 Constituents =====
  {symbol:'PERSISTENT',name:'Persistent Systems Ltd',sector:'IT',cap:'mid',basePrice:5200},
  {symbol:'COFORGE',name:'Coforge Ltd',sector:'IT',cap:'mid',basePrice:5800},
  {symbol:'MPHASIS',name:'MphasiS Ltd',sector:'IT',cap:'mid',basePrice:2600},
  {symbol:'FEDERALBNK',name:'Federal Bank Ltd',sector:'Banking',cap:'mid',basePrice:168},
  {symbol:'ESCORTS',name:'Escorts Kubota Ltd',sector:'Auto',cap:'mid',basePrice:3400},
  {symbol:'AUROPHARMA',name:'Aurobindo Pharma Ltd',sector:'Pharma',cap:'mid',basePrice:1280},
  {symbol:'CROMPTON',name:'Crompton Greaves Consumer Electricals Ltd',sector:'Consumer',cap:'mid',basePrice:380},
  {symbol:'MUTHOOTFIN',name:'Muthoot Finance Ltd',sector:'Finance',cap:'mid',basePrice:1850},
  {symbol:'CUMMINSIND',name:'Cummins India Ltd',sector:'Industrial',cap:'mid',basePrice:2800},
  {symbol:'POLYCAB',name:'Polycab India Ltd',sector:'Industrial',cap:'mid',basePrice:5600},
  {symbol:'TRENT',name:'Trent Ltd',sector:'Retail',cap:'mid',basePrice:4200},
  {symbol:'GODREJCP',name:'Godrej Consumer Products Ltd',sector:'FMCG',cap:'mid',basePrice:1350},
  {symbol:'VOLTAS',name:'Voltas Ltd',sector:'Consumer',cap:'mid',basePrice:1150},
  {symbol:'PIIND',name:'PI Industries Ltd',sector:'Chemicals',cap:'mid',basePrice:3800},
  {symbol:'ASTRAL',name:'Astral Ltd',sector:'Industrial',cap:'mid',basePrice:1900},
  {symbol:'JUBLFOOD',name:'Jubilant FoodWorks Ltd',sector:'Consumer',cap:'mid',basePrice:580},
  {symbol:'MAXHEALTH',name:'Max Healthcare Institute Ltd',sector:'Healthcare',cap:'mid',basePrice:820},
  {symbol:'DMART',name:'Avenue Supermarts Ltd',sector:'Retail',cap:'mid',basePrice:4100},
  {symbol:'OBEROIRLTY',name:'Oberoi Realty Ltd',sector:'Real Estate',cap:'mid',basePrice:1600},
  {symbol:'TORNTPHARM',name:'Torrent Pharmaceuticals Ltd',sector:'Pharma',cap:'mid',basePrice:2600},
  {symbol:'BHARATFORG',name:'Bharat Forge Ltd',sector:'Industrial',cap:'mid',basePrice:1350},
  {symbol:'IDFCFIRSTB',name:'IDFC First Bank Ltd',sector:'Banking',cap:'mid',basePrice:82},
  {symbol:'LICHSGFIN',name:'LIC Housing Finance Ltd',sector:'Finance',cap:'mid',basePrice:620},
  {symbol:'PAGEIND',name:'Page Industries Ltd',sector:'Textiles',cap:'mid',basePrice:42000},
  {symbol:'PHOENIXLTD',name:'Phoenix Mills Ltd',sector:'Real Estate',cap:'mid',basePrice:1650},
  {symbol:'SOLARIND',name:'Solar Industries India Ltd',sector:'Chemicals',cap:'mid',basePrice:6800},
  {symbol:'ABCAPITAL',name:'Aditya Birla Capital Ltd',sector:'Finance',cap:'mid',basePrice:210},
  {symbol:'MFSL',name:'Max Financial Services Ltd',sector:'Insurance',cap:'mid',basePrice:1050},
  {symbol:'COLPAL',name:'Colgate-Palmolive India Ltd',sector:'FMCG',cap:'mid',basePrice:2700},
  {symbol:'AMBUJACEM',name:'Ambuja Cements Ltd',sector:'Cement',cap:'mid',basePrice:620},
  {symbol:'CONCOR',name:'Container Corporation of India Ltd',sector:'Logistics',cap:'mid',basePrice:880},
  {symbol:'IRCTC',name:'Indian Railway Catering and Tourism Corporation Ltd',sector:'Consumer',cap:'mid',basePrice:880},
  {symbol:'SAIL',name:'Steel Authority of India Ltd',sector:'Metals',cap:'mid',basePrice:130},
  {symbol:'CANBK',name:'Canara Bank',sector:'Banking',cap:'mid',basePrice:110},
  {symbol:'INDHOTEL',name:'Indian Hotels Company Ltd',sector:'Hotels',cap:'mid',basePrice:620},
  {symbol:'OFSS',name:'Oracle Financial Services Software Ltd',sector:'IT',cap:'mid',basePrice:5200},
  {symbol:'LUPIN',name:'Lupin Ltd',sector:'Pharma',cap:'mid',basePrice:1600},
  {symbol:'IPCALAB',name:'IPCA Laboratories Ltd',sector:'Pharma',cap:'mid',basePrice:1350},
  {symbol:'ABB',name:'ABB India Ltd',sector:'Industrial',cap:'mid',basePrice:5800},
  {symbol:'SIEMENS',name:'Siemens Ltd',sector:'Industrial',cap:'mid',basePrice:5400},
  {symbol:'HAVELLS',name:'Havells India Ltd',sector:'Consumer',cap:'mid',basePrice:1580},
  {symbol:'WHIRLPOOL',name:'Whirlpool of India Ltd',sector:'Consumer',cap:'mid',basePrice:1400},
  {symbol:'BALKRISIND',name:'Balkrishna Industries Ltd',sector:'Auto',cap:'mid',basePrice:2600},
  {symbol:'SUNDARMFIN',name:'Sundaram Finance Ltd',sector:'Finance',cap:'mid',basePrice:4200},
  {symbol:'MCDOWELL',name:'United Spirits Ltd',sector:'Consumer',cap:'mid',basePrice:6800},
  {symbol:'BERGEPAINT',name:'Berger Paints India Ltd',sector:'Consumer',cap:'mid',basePrice:550},
  {symbol:'PIDILITIND',name:'Pidilite Industries Ltd',sector:'Chemicals',cap:'mid',basePrice:2750},
  {symbol:'ATUL',name:'Atul Ltd',sector:'Chemicals',cap:'mid',basePrice:6400},
  {symbol:'SYNGENE',name:'Syngene International Ltd',sector:'Healthcare',cap:'mid',basePrice:780},
  {symbol:'ALKEM',name:'Alkem Laboratories Ltd',sector:'Pharma',cap:'mid',basePrice:5200},
  {symbol:'BANDHANBNK',name:'Bandhan Bank Ltd',sector:'Banking',cap:'mid',basePrice:220},
  {symbol:'NAUKRI',name:'Info Edge India Ltd',sector:'Internet',cap:'mid',basePrice:5400},
  {symbol:'LTIM',name:'LTIMindtree Ltd',sector:'IT',cap:'mid',basePrice:5600},
  {symbol:'PETRONET',name:'Petronet LNG Ltd',sector:'Energy',cap:'mid',basePrice:260},
  {symbol:'GLAND',name:'Gland Pharma Ltd',sector:'Pharma',cap:'mid',basePrice:1750},
  {symbol:'NHPC',name:'NHPC Ltd',sector:'Power',cap:'mid',basePrice:68},
  {symbol:'TATAPOWER',name:'Tata Power Company Ltd',sector:'Power',cap:'mid',basePrice:420},
  {symbol:'TATACOMM',name:'Tata Communications Ltd',sector:'Telecom',cap:'mid',basePrice:1780},
  {symbol:'BIOCON',name:'Biocon Ltd',sector:'Pharma',cap:'mid',basePrice:280},
  {symbol:'LAURUSLABS',name:'Laurus Labs Ltd',sector:'Pharma',cap:'mid',basePrice:420},
  {symbol:'MANAPPURAM',name:'Manappuram Finance Ltd',sector:'Finance',cap:'mid',basePrice:180},
  {symbol:'LINDEINDIA',name:'Linde India Ltd',sector:'Chemicals',cap:'mid',basePrice:6200},
  {symbol:'AUBANK',name:'AU Small Finance Bank Ltd',sector:'Banking',cap:'mid',basePrice:650},
  {symbol:'CHOLAFIN',name:'Cholamandalam Investment and Finance Co Ltd',sector:'Finance',cap:'mid',basePrice:1350},
  {symbol:'PNB',name:'Punjab National Bank',sector:'Banking',cap:'mid',basePrice:105},
  {symbol:'BANKBARODA',name:'Bank of Baroda',sector:'Banking',cap:'mid',basePrice:260},
  {symbol:'RECLTD',name:'REC Ltd',sector:'Finance',cap:'mid',basePrice:520},
  {symbol:'PFC',name:'Power Finance Corporation Ltd',sector:'Finance',cap:'mid',basePrice:480},
  {symbol:'NMDC',name:'NMDC Ltd',sector:'Mining',cap:'mid',basePrice:220},
  {symbol:'GODREJPROP',name:'Godrej Properties Ltd',sector:'Real Estate',cap:'mid',basePrice:2200},
  {symbol:'INDUSTOWER',name:'Indus Towers Ltd',sector:'Telecom',cap:'mid',basePrice:350},
  {symbol:'ZYDUSLIFE',name:'Zydus Lifesciences Ltd',sector:'Pharma',cap:'mid',basePrice:620},
  {symbol:'APLAPOLLO',name:'APL Apollo Tubes Ltd',sector:'Industrial',cap:'mid',basePrice:1650},
  {symbol:'DEEPAKNITRI',name:'Deepak Nitrite Ltd',sector:'Chemicals',cap:'mid',basePrice:2200},
  {symbol:'SCHAEFFLER',name:'Schaeffler India Ltd',sector:'Auto',cap:'mid',basePrice:3400},
  {symbol:'HONAUT',name:'Honeywell Automation India Ltd',sector:'Industrial',cap:'mid',basePrice:48000},
  {symbol:'GLAXO',name:'GlaxoSmithKline Pharmaceuticals Ltd',sector:'Pharma',cap:'mid',basePrice:1650},
  {symbol:'STARHEALTH',name:'Star Health and Allied Insurance Co Ltd',sector:'Insurance',cap:'mid',basePrice:580},
  {symbol:'SUPREMEIND',name:'Supreme Industries Ltd',sector:'Industrial',cap:'mid',basePrice:4800},
  {symbol:'THERMAX',name:'Thermax Ltd',sector:'Industrial',cap:'mid',basePrice:3200},
  {symbol:'RATNAMANI',name:'Ratnamani Metals and Tubes Ltd',sector:'Industrial',cap:'mid',basePrice:3100},
  {symbol:'SUNDRMFAST',name:'Sundram Fasteners Ltd',sector:'Auto',cap:'mid',basePrice:1150},
  {symbol:'NATCO',name:'Natco Pharma Ltd',sector:'Pharma',cap:'mid',basePrice:880},
  {symbol:'KANSAINER',name:'Kansai Nerolac Paints Ltd',sector:'Consumer',cap:'mid',basePrice:420},
  {symbol:'JKCEMENT',name:'JK Cement Ltd',sector:'Cement',cap:'mid',basePrice:4200},
  {symbol:'TVSMOTOR',name:'TVS Motor Company Ltd',sector:'Auto',cap:'mid',basePrice:2200},
  {symbol:'ACC',name:'ACC Ltd',sector:'Cement',cap:'mid',basePrice:2450},
  {symbol:'EMAMILTD',name:'Emami Ltd',sector:'FMCG',cap:'mid',basePrice:620},
  {symbol:'PRESTIGE',name:'Prestige Estates Projects Ltd',sector:'Real Estate',cap:'mid',basePrice:1250},
  {symbol:'KAJARIACER',name:'Kajaria Ceramics Ltd',sector:'Consumer',cap:'mid',basePrice:1350},
  {symbol:'ZEEL',name:'Zee Entertainment Enterprises Ltd',sector:'Media',cap:'mid',basePrice:145},
  {symbol:'RAMCOCEM',name:'Ramco Cements Ltd',sector:'Cement',cap:'mid',basePrice:920},
  {symbol:'TATACHEM',name:'Tata Chemicals Ltd',sector:'Chemicals',cap:'mid',basePrice:1080},
  {symbol:'SUMICHEM',name:'Sumitomo Chemical India Ltd',sector:'Chemicals',cap:'mid',basePrice:420},
  {symbol:'NIACL',name:'New India Assurance Company Ltd',sector:'Insurance',cap:'mid',basePrice:195},
  {symbol:'SPARC',name:'Sun Pharma Advanced Research Company Ltd',sector:'Pharma',cap:'mid',basePrice:310},
  {symbol:'CENTRALBK',name:'Central Bank of India',sector:'Banking',cap:'mid',basePrice:62},
  {symbol:'MARICO',name:'Marico Ltd',sector:'FMCG',cap:'mid',basePrice:580},
  {symbol:'DABUR',name:'Dabur India Ltd',sector:'FMCG',cap:'mid',basePrice:560},
  {symbol:'SUNTV',name:'Sun TV Network Ltd',sector:'Media',cap:'mid',basePrice:620},
  {symbol:'APOLLOTYRE',name:'Apollo Tyres Ltd',sector:'Auto',cap:'mid',basePrice:430},
  {symbol:'FINPIPE',name:'Finolex Industries Ltd',sector:'Industrial',cap:'mid',basePrice:265},
  {symbol:'IDEA',name:'Vodafone Idea Ltd',sector:'Telecom',cap:'mid',basePrice:14},
  {symbol:'TORNTPOWER',name:'Torrent Power Ltd',sector:'Power',cap:'mid',basePrice:680},
  {symbol:'INDIANB',name:'Indian Bank',sector:'Banking',cap:'mid',basePrice:520},
  {symbol:'GICRE',name:'General Insurance Corporation of India',sector:'Insurance',cap:'mid',basePrice:340},
  {symbol:'BOSCHLTD',name:'Bosch Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:19800},
  {symbol:'MOTHERSON',name:'Samvardhana Motherson International Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:135},
  {symbol:'CGPOWER',name:'CG Power and Industrial Solutions Ltd',sector:'Industrial',cap:'mid',basePrice:520},
  {symbol:'LTTS',name:'L&T Technology Services Ltd',sector:'IT',cap:'mid',basePrice:4850},
  {symbol:'ABFRL',name:'Aditya Birla Fashion and Retail Ltd',sector:'Retail',cap:'mid',basePrice:220},
  {symbol:'IDBI',name:'IDBI Bank Ltd',sector:'Banking',cap:'mid',basePrice:82},
  {symbol:'IOC',name:'Indian Oil Corporation Ltd',sector:'Oil & Gas',cap:'mid',basePrice:145},
  {symbol:'HINDPETRO',name:'Hindustan Petroleum Corporation Ltd',sector:'Oil & Gas',cap:'mid',basePrice:310},
  {symbol:'GAIL',name:'GAIL India Ltd',sector:'Oil & Gas',cap:'mid',basePrice:185},
  {symbol:'BHEL',name:'Bharat Heavy Electricals Ltd',sector:'Industrial',cap:'mid',basePrice:265},
  {symbol:'GUJGAS',name:'Gujarat Gas Ltd',sector:'Energy',cap:'mid',basePrice:520},
  {symbol:'EXIDEIND',name:'Exide Industries Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:340},
  {symbol:'MRF',name:'MRF Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:125000},
  {symbol:'BATAINDIA',name:'Bata India Ltd',sector:'Consumer',cap:'mid',basePrice:1520},
  {symbol:'LALPATHLAB',name:'Dr Lal PathLabs Ltd',sector:'Healthcare',cap:'mid',basePrice:2850},
  {symbol:'FORTIS',name:'Fortis Healthcare Ltd',sector:'Healthcare',cap:'mid',basePrice:450},
  {symbol:'GMRINFRA',name:'GMR Airports Infrastructure Ltd',sector:'Infrastructure',cap:'mid',basePrice:82},
  {symbol:'ADANIGREEN',name:'Adani Green Energy Ltd',sector:'Power',cap:'mid',basePrice:1750},
  {symbol:'ADANITRANS',name:'Adani Energy Solutions Ltd',sector:'Power',cap:'mid',basePrice:1080},
  {symbol:'VEDL',name:'Vedanta Ltd',sector:'Metals',cap:'mid',basePrice:420},
  {symbol:'NATIONALUM',name:'National Aluminium Company Ltd',sector:'Metals',cap:'mid',basePrice:165},
  {symbol:'JINDALSTL',name:'Jindal Steel and Power Ltd',sector:'Metals',cap:'mid',basePrice:880},
  {symbol:'DALBHARAT',name:'Dalmia Bharat Ltd',sector:'Cement',cap:'mid',basePrice:1950},
  {symbol:'INDIACEM',name:'India Cements Ltd',sector:'Cement',cap:'mid',basePrice:285},
  {symbol:'LLOYDSME',name:'Lloyds Metals and Energy Ltd',sector:'Metals',cap:'mid',basePrice:780},
  {symbol:'CANFINHOME',name:'Can Fin Homes Ltd',sector:'Finance',cap:'mid',basePrice:780},
  {symbol:'IIFL',name:'IIFL Finance Ltd',sector:'Finance',cap:'mid',basePrice:480},
  {symbol:'LTFH',name:'L&T Finance Ltd',sector:'Finance',cap:'mid',basePrice:155},
  {symbol:'COROMANDEL',name:'Coromandel International Ltd',sector:'Fertilizer',cap:'mid',basePrice:1250},
  {symbol:'GNFC',name:'Gujarat Narmada Valley Fertilizers and Chemicals Ltd',sector:'Fertilizer',cap:'mid',basePrice:620},
  {symbol:'CHAMBALFERT',name:'Chambal Fertilisers and Chemicals Ltd',sector:'Fertilizer',cap:'mid',basePrice:345},
  {symbol:'HINDCOPPER',name:'Hindustan Copper Ltd',sector:'Mining',cap:'mid',basePrice:255},
  {symbol:'IREDA',name:'Indian Renewable Energy Development Agency Ltd',sector:'Finance',cap:'mid',basePrice:185},
  {symbol:'HUDCO',name:'Housing and Urban Development Corporation Ltd',sector:'Finance',cap:'mid',basePrice:220},
  {symbol:'SUZLON',name:'Suzlon Energy Ltd',sector:'Power',cap:'mid',basePrice:52},
  {symbol:'JSPL',name:'Jindal Stainless Ltd',sector:'Metals',cap:'mid',basePrice:620},
  {symbol:'KEI',name:'KEI Industries Ltd',sector:'Industrial',cap:'mid',basePrice:3800},
  {symbol:'TRIDENT',name:'Trident Ltd',sector:'Textiles',cap:'mid',basePrice:38},
  {symbol:'SUVENPHAR',name:'Suven Pharmaceuticals Ltd',sector:'Pharma',cap:'mid',basePrice:580},
  {symbol:'JSWINFRA',name:'JSW Infrastructure Ltd',sector:'Infrastructure',cap:'mid',basePrice:260},
  {symbol:'SOBHA',name:'Sobha Ltd',sector:'Real Estate',cap:'mid',basePrice:1550},
  {symbol:'BRIGADE',name:'Brigade Enterprises Ltd',sector:'Real Estate',cap:'mid',basePrice:1180},
  {symbol:'TTML',name:'Tata Teleservices Maharashtra Ltd',sector:'Telecom',cap:'mid',basePrice:85},
  {symbol:'MOTILALOFS',name:'Motilal Oswal Financial Services Ltd',sector:'Finance',cap:'mid',basePrice:1850},

  // ===== SMALL CAP (250 stocks) - Nifty Smallcap 250 Constituents =====
  {symbol:'CDSL',name:'Central Depository Services India Ltd',sector:'Fintech',cap:'small',basePrice:1800},
  {symbol:'KPITTECH',name:'KPIT Technologies Ltd',sector:'IT',cap:'small',basePrice:1450},
  {symbol:'DEEPAKNTR',name:'Deepak Fertilisers and Petrochemicals Ltd',sector:'Chemicals',cap:'small',basePrice:2200},
  {symbol:'MAZDOCK',name:'Mazagon Dock Shipbuilders Ltd',sector:'Defence',cap:'small',basePrice:3800},
  {symbol:'BEL',name:'Bharat Electronics Ltd',sector:'Defence',cap:'small',basePrice:280},
  {symbol:'HAL',name:'Hindustan Aeronautics Ltd',sector:'Defence',cap:'small',basePrice:4200},
  {symbol:'COCHINSHIP',name:'Cochin Shipyard Ltd',sector:'Shipping',cap:'small',basePrice:1800},
  {symbol:'IRFC',name:'Indian Railway Finance Corporation Ltd',sector:'Finance',cap:'small',basePrice:160},
  {symbol:'ZOMATO',name:'Zomato Ltd',sector:'Internet',cap:'small',basePrice:240},
  {symbol:'PAYTM',name:'One97 Communications Ltd',sector:'Fintech',cap:'small',basePrice:780},
  {symbol:'JIOFIN',name:'Jio Financial Services Ltd',sector:'Fintech',cap:'small',basePrice:310},
  {symbol:'POLICYBZR',name:'PB Fintech Ltd',sector:'Fintech',cap:'small',basePrice:1650},
  {symbol:'DELHIVERY',name:'Delhivery Ltd',sector:'Logistics',cap:'small',basePrice:420},
  {symbol:'AFFLE',name:'Affle India Ltd',sector:'IT',cap:'small',basePrice:1180},
  {symbol:'CLEAN',name:'Clean Science and Technology Ltd',sector:'Chemicals',cap:'small',basePrice:1500},
  {symbol:'FINEORG',name:'Fine Organic Industries Ltd',sector:'Chemicals',cap:'small',basePrice:4800},
  {symbol:'FCL',name:'Fineotex Chemical Ltd',sector:'Chemicals',cap:'small',basePrice:85},
  {symbol:'GRINDWELL',name:'Grindwell Norton Ltd',sector:'Industrial',cap:'small',basePrice:2100},
  {symbol:'HAPPSTMNDS',name:'Happiest Minds Technologies Ltd',sector:'IT',cap:'small',basePrice:780},
  {symbol:'ROUTE',name:'Route Mobile Ltd',sector:'IT',cap:'small',basePrice:1650},
  {symbol:'TANLA',name:'Tanla Platforms Ltd',sector:'IT',cap:'small',basePrice:920},
  {symbol:'DATAPATTNS',name:'Data Patterns India Ltd',sector:'Defence',cap:'small',basePrice:2400},
  {symbol:'IDEAFORGE',name:'Ideaforge Technology Ltd',sector:'Defence',cap:'small',basePrice:680},
  {symbol:'SYRMA',name:'Syrma SGS Technology Ltd',sector:'Electronics',cap:'small',basePrice:420},
  {symbol:'KAYNES',name:'Kaynes Technology India Ltd',sector:'Electronics',cap:'small',basePrice:3800},
  {symbol:'DIXON',name:'Dixon Technologies India Ltd',sector:'Electronics',cap:'small',basePrice:5200},
  {symbol:'AMBER',name:'Amber Enterprises India Ltd',sector:'Electronics',cap:'small',basePrice:3400},
  {symbol:'OLECTRA',name:'Olectra Greentech Ltd',sector:'EV',cap:'small',basePrice:1350},
  {symbol:'TATAELXSI',name:'Tata Elxsi Ltd',sector:'IT',cap:'small',basePrice:6800},
  {symbol:'SONACOMS',name:'Sona BLW Precision Forgings Ltd',sector:'Auto',cap:'small',basePrice:620},
  {symbol:'CRAFTSMAN',name:'Craftsman Automation Ltd',sector:'Auto',cap:'small',basePrice:4800},
  {symbol:'CARTRADE',name:'CarTrade Tech Ltd',sector:'Internet',cap:'small',basePrice:820},
  {symbol:'YATHARTH',name:'Yatharth Hospital and Trauma Care Services Ltd',sector:'Healthcare',cap:'small',basePrice:520},
  {symbol:'MEDANTA',name:'Global Health Ltd',sector:'Healthcare',cap:'small',basePrice:1350},
  {symbol:'RAINBOW',name:'Rainbow Childrens Medicare Ltd',sector:'Healthcare',cap:'small',basePrice:1450},
  {symbol:'AAVAS',name:'Aavas Financiers Ltd',sector:'Finance',cap:'small',basePrice:1650},
  {symbol:'HOMEFIRST',name:'Home First Finance Company India Ltd',sector:'Finance',cap:'small',basePrice:950},
  {symbol:'APTUS',name:'Aptus Value Housing Finance India Ltd',sector:'Finance',cap:'small',basePrice:340},
  {symbol:'CAMPUS',name:'Campus Activewear Ltd',sector:'Consumer',cap:'small',basePrice:280},
  {symbol:'METROBRAND',name:'Metro Brands Ltd',sector:'Retail',cap:'small',basePrice:1250},
  {symbol:'GPIL',name:'Godawari Power and Ispat Ltd',sector:'Metals',cap:'small',basePrice:680},
  {symbol:'RVNL',name:'Rail Vikas Nigam Ltd',sector:'Infrastructure',cap:'small',basePrice:260},
  {symbol:'IRCON',name:'Ircon International Ltd',sector:'Infrastructure',cap:'small',basePrice:220},
  {symbol:'NBCC',name:'NBCC India Ltd',sector:'Infrastructure',cap:'small',basePrice:140},
  {symbol:'ENGINERSIN',name:'Engineers India Ltd',sector:'Infrastructure',cap:'small',basePrice:210},
  {symbol:'EASEMYTRIP',name:'Easy Trip Planners Ltd',sector:'Internet',cap:'small',basePrice:38},
  {symbol:'IXIGO',name:'Le Travenues Technology Ltd',sector:'Internet',cap:'small',basePrice:155},
  {symbol:'RATEGAIN',name:'RateGain Travel Technologies Ltd',sector:'IT',cap:'small',basePrice:680},
  {symbol:'LATENTVIEW',name:'Latent View Analytics Ltd',sector:'IT',cap:'small',basePrice:420},
  {symbol:'INTELLECT',name:'Intellect Design Arena Ltd',sector:'IT',cap:'small',basePrice:780},
  {symbol:'MASTEK',name:'Mastek Ltd',sector:'IT',cap:'small',basePrice:2600},
  {symbol:'BIRLASOFT',name:'Birlasoft Ltd',sector:'IT',cap:'small',basePrice:580},
  {symbol:'ZENSAR',name:'Zensar Technologies Ltd',sector:'IT',cap:'small',basePrice:520},
  {symbol:'NUVAMA',name:'Nuvama Wealth Management Ltd',sector:'Finance',cap:'small',basePrice:5200},
  {symbol:'ANGELONE',name:'Angel One Ltd',sector:'Fintech',cap:'small',basePrice:2800},
  {symbol:'CAMS',name:'Computer Age Management Services Ltd',sector:'Fintech',cap:'small',basePrice:3200},
  {symbol:'JBCHEPHARM',name:'JB Chemicals and Pharmaceuticals Ltd',sector:'Pharma',cap:'small',basePrice:1750},
  {symbol:'SUPRIYA',name:'Supriya Lifescience Ltd',sector:'Pharma',cap:'small',basePrice:480},
  {symbol:'LXCHEM',name:'Laxmi Organic Industries Ltd',sector:'Chemicals',cap:'small',basePrice:280},
  {symbol:'TATVA',name:'Tatva Chintan Pharma Chem Ltd',sector:'Chemicals',cap:'small',basePrice:1850},
  {symbol:'GALAXYSURF',name:'Galaxy Surfactants Ltd',sector:'Chemicals',cap:'small',basePrice:2800},
  {symbol:'FLUOROCHEM',name:'Gujarat Fluorochemicals Ltd',sector:'Chemicals',cap:'small',basePrice:3200},
  {symbol:'ANANDRATHI',name:'Anand Rathi Wealth Ltd',sector:'Finance',cap:'small',basePrice:4200},
  {symbol:'FIVESTAR',name:'Five-Star Business Finance Ltd',sector:'Finance',cap:'small',basePrice:780},
  {symbol:'JKLAKSHMI',name:'JK Lakshmi Cement Ltd',sector:'Cement',cap:'small',basePrice:820},
  {symbol:'STARCEMENT',name:'Star Cement Ltd',sector:'Cement',cap:'small',basePrice:210},
  {symbol:'RADICO',name:'Radico Khaitan Ltd',sector:'Consumer',cap:'small',basePrice:1650},
  {symbol:'GLOBUSSPR',name:'Globus Spirits Ltd',sector:'Consumer',cap:'small',basePrice:1050},
  {symbol:'SAPPHIRE',name:'Sapphire Foods India Ltd',sector:'Consumer',cap:'small',basePrice:1450},
  {symbol:'DEVYANI',name:'Devyani International Ltd',sector:'Consumer',cap:'small',basePrice:165},
  {symbol:'SHOPERSTOP',name:'Shoppers Stop Ltd',sector:'Retail',cap:'small',basePrice:780},
  {symbol:'VMART',name:'V-Mart Retail Ltd',sector:'Retail',cap:'small',basePrice:2200},
  {symbol:'TEGA',name:'Tega Industries Ltd',sector:'Industrial',cap:'small',basePrice:1450},
  {symbol:'CERA',name:'Cera Sanitaryware Ltd',sector:'Consumer',cap:'small',basePrice:7200},
  {symbol:'ELGIEQUIP',name:'Elgi Equipments Ltd',sector:'Industrial',cap:'small',basePrice:580},
  {symbol:'TIMKEN',name:'Timken India Ltd',sector:'Industrial',cap:'small',basePrice:3400},
  {symbol:'PRAJ',name:'Praj Industries Ltd',sector:'Industrial',cap:'small',basePrice:520},
  {symbol:'GPPL',name:'Gujarat Pipavav Port Ltd',sector:'Logistics',cap:'small',basePrice:165},
  {symbol:'TCI',name:'Transport Corporation of India Ltd',sector:'Logistics',cap:'small',basePrice:880},
  {symbol:'BLUESTARCO',name:'Blue Star Ltd',sector:'Consumer',cap:'small',basePrice:1250},
  {symbol:'CENTURYTEX',name:'Century Textiles and Industries Ltd',sector:'Textiles',cap:'small',basePrice:1650},
  {symbol:'RAYMOND',name:'Raymond Ltd',sector:'Textiles',cap:'small',basePrice:1850},
  {symbol:'TVSSRICHAK',name:'TVS Srichakra Ltd',sector:'Auto',cap:'small',basePrice:3200},
  {symbol:'GRSE',name:'Garden Reach Shipbuilders and Engineers Ltd',sector:'Defence',cap:'small',basePrice:2100},
  {symbol:'BDL',name:'Bharat Dynamics Ltd',sector:'Defence',cap:'small',basePrice:1250},
  {symbol:'JSWENERGY',name:'JSW Energy Ltd',sector:'Power',cap:'small',basePrice:480},
  {symbol:'SJVN',name:'SJVN Ltd',sector:'Power',cap:'small',basePrice:120},
  {symbol:'POWERMECH',name:'Power Mech Projects Ltd',sector:'Infrastructure',cap:'small',basePrice:4800},
  {symbol:'PRICOLLTD',name:'Pricol Ltd',sector:'Auto',cap:'small',basePrice:480},
  {symbol:'ELECON',name:'Elecon Engineering Company Ltd',sector:'Industrial',cap:'small',basePrice:580},
  {symbol:'SENCO',name:'Senco Gold Ltd',sector:'Consumer',cap:'small',basePrice:1050},
  {symbol:'KALYANKJIL',name:'Kalyan Jewellers India Ltd',sector:'Consumer',cap:'small',basePrice:480},
  {symbol:'NETWORK18',name:'Network18 Media and Investments Ltd',sector:'Media',cap:'small',basePrice:82},
  {symbol:'NAZARA',name:'Nazara Technologies Ltd',sector:'Media',cap:'small',basePrice:780},
  {symbol:'PVRINOX',name:'PVR INOX Ltd',sector:'Media',cap:'small',basePrice:1450},
  {symbol:'ZAGGLE',name:'Zaggle Prepaid Ocean Services Ltd',sector:'Fintech',cap:'small',basePrice:340},
  {symbol:'RBLBANK',name:'RBL Bank Ltd',sector:'Banking',cap:'small',basePrice:240},
  {symbol:'UJJIVANSFB',name:'Ujjivan Small Finance Bank Ltd',sector:'Banking',cap:'small',basePrice:48},
  {symbol:'EQUITASBNK',name:'Equitas Small Finance Bank Ltd',sector:'Banking',cap:'small',basePrice:95},
  {symbol:'NYKAA',name:'FSN E-Commerce Ventures Ltd',sector:'Internet',cap:'small',basePrice:175},
  {symbol:'EIDPARRY',name:'EID Parry India Ltd',sector:'Sugar',cap:'small',basePrice:620},
  {symbol:'BALRAMCHIN',name:'Balrampur Chini Mills Ltd',sector:'Sugar',cap:'small',basePrice:420},
  {symbol:'RENUKA',name:'Shree Renuka Sugars Ltd',sector:'Sugar',cap:'small',basePrice:48},
  {symbol:'TRIVENI',name:'Triveni Engineering and Industries Ltd',sector:'Sugar',cap:'small',basePrice:380},
  {symbol:'DHAMPUR',name:'Dhampur Sugar Mills Ltd',sector:'Sugar',cap:'small',basePrice:220},
  {symbol:'AVALON',name:'Avalon Technologies Ltd',sector:'Electronics',cap:'small',basePrice:520},
  {symbol:'HBLPOWER',name:'HBL Power Systems Ltd',sector:'Electronics',cap:'small',basePrice:580},
  {symbol:'NELCO',name:'Nelco Ltd',sector:'Electronics',cap:'small',basePrice:850},
  {symbol:'MIDHANI',name:'Mishra Dhatu Nigam Ltd',sector:'Defence',cap:'small',basePrice:380},
  {symbol:'PARAS',name:'Paras Defence and Space Technologies Ltd',sector:'Defence',cap:'small',basePrice:920},
  {symbol:'DCXINDIA',name:'DCX Systems Ltd',sector:'Defence',cap:'small',basePrice:310},
  {symbol:'ASTRAZEN',name:'AstraZeneca Pharma India Ltd',sector:'Pharma',cap:'small',basePrice:5800},
  {symbol:'ERIS',name:'Eris Lifesciences Ltd',sector:'Pharma',cap:'small',basePrice:920},
  {symbol:'AJANTPHARM',name:'Ajanta Pharma Ltd',sector:'Pharma',cap:'small',basePrice:2400},
  {symbol:'GRANULES',name:'Granules India Ltd',sector:'Pharma',cap:'small',basePrice:380},
  {symbol:'SOLARA',name:'Solara Active Pharma Sciences Ltd',sector:'Pharma',cap:'small',basePrice:420},
  {symbol:'MARKSANS',name:'Marksans Pharma Ltd',sector:'Pharma',cap:'small',basePrice:155},
  {symbol:'SHILPAMED',name:'Shilpa Medicare Ltd',sector:'Pharma',cap:'small',basePrice:520},
  {symbol:'CAPLIPOINT',name:'Caplin Point Laboratories Ltd',sector:'Pharma',cap:'small',basePrice:1350},
  {symbol:'NEULANDLAB',name:'Neuland Laboratories Ltd',sector:'Pharma',cap:'small',basePrice:6200},
  {symbol:'WINDLAS',name:'Windlas Biotech Ltd',sector:'Pharma',cap:'small',basePrice:680},
  {symbol:'DELTACORP',name:'Delta Corp Ltd',sector:'Hotels',cap:'small',basePrice:180},
  {symbol:'LEMONTREE',name:'Lemon Tree Hotels Ltd',sector:'Hotels',cap:'small',basePrice:135},
  {symbol:'CHALET',name:'Chalet Hotels Ltd',sector:'Hotels',cap:'small',basePrice:680},
  {symbol:'EIHOTEL',name:'EIH Ltd',sector:'Hotels',cap:'small',basePrice:310},
  {symbol:'JUNIPER',name:'Juniper Hotels Ltd',sector:'Hotels',cap:'small',basePrice:420},
  {symbol:'INTERGLOBE',name:'InterGlobe Aviation Ltd',sector:'Aviation',cap:'small',basePrice:4200},
  {symbol:'SPICEJET',name:'SpiceJet Ltd',sector:'Aviation',cap:'small',basePrice:62},
  {symbol:'SAFARI',name:'Safari Industries India Ltd',sector:'Consumer',cap:'small',basePrice:2400},
  {symbol:'VGUARD',name:'V-Guard Industries Ltd',sector:'Consumer',cap:'small',basePrice:420},
  {symbol:'SYMPHONY',name:'Symphony Ltd',sector:'Consumer',cap:'small',basePrice:1050},
  {symbol:'ORIENTELEC',name:'Orient Electric Ltd',sector:'Consumer',cap:'small',basePrice:280},
  {symbol:'TTKHLTCARE',name:'TTK Healthcare Ltd',sector:'Consumer',cap:'small',basePrice:1250},
  {symbol:'BAJAJELEC',name:'Bajaj Electricals Ltd',sector:'Consumer',cap:'small',basePrice:1180},
  {symbol:'STOVEKRAFT',name:'Stove Kraft Ltd',sector:'Consumer',cap:'small',basePrice:680},
  {symbol:'JYOTHY',name:'Jyothy Labs Ltd',sector:'FMCG',cap:'small',basePrice:420},
  {symbol:'BIKAJI',name:'Bikaji Foods International Ltd',sector:'FMCG',cap:'small',basePrice:650},
  {symbol:'GODFRYPHLP',name:'Godfrey Phillips India Ltd',sector:'FMCG',cap:'small',basePrice:4800},
  {symbol:'KRBL',name:'KRBL Ltd',sector:'FMCG',cap:'small',basePrice:310},
  {symbol:'HATSUN',name:'Hatsun Agro Product Ltd',sector:'FMCG',cap:'small',basePrice:1050},
  {symbol:'WESTLIFE',name:'Westlife Foodworld Ltd',sector:'Consumer',cap:'small',basePrice:780},
  {symbol:'BARBEQUE',name:'Barbeque-Nation Hospitality Ltd',sector:'Consumer',cap:'small',basePrice:520},
  {symbol:'MAHLIFE',name:'Mahindra Lifespace Developers Ltd',sector:'Real Estate',cap:'small',basePrice:520},
  {symbol:'SUNTECK',name:'Sunteck Realty Ltd',sector:'Real Estate',cap:'small',basePrice:480},
  {symbol:'KOLTEPATIL',name:'Kolte-Patil Developers Ltd',sector:'Real Estate',cap:'small',basePrice:420},
  {symbol:'ANANTRAJ',name:'Anant Raj Ltd',sector:'Real Estate',cap:'small',basePrice:580},
  {symbol:'PURVA',name:'Puravankara Ltd',sector:'Real Estate',cap:'small',basePrice:380},
  {symbol:'ASHOKA',name:'Ashoka Buildcon Ltd',sector:'Infrastructure',cap:'small',basePrice:220},
  {symbol:'KNR',name:'KNR Constructions Ltd',sector:'Infrastructure',cap:'small',basePrice:310},
  {symbol:'PNCINFRA',name:'PNC Infratech Ltd',sector:'Infrastructure',cap:'small',basePrice:380},
  {symbol:'HCC',name:'Hindustan Construction Company Ltd',sector:'Infrastructure',cap:'small',basePrice:38},
  {symbol:'NLCINDIA',name:'NLC India Ltd',sector:'Power',cap:'small',basePrice:245},
  {symbol:'CESC',name:'CESC Ltd',sector:'Power',cap:'small',basePrice:155},
  {symbol:'JPPOWER',name:'Jaiprakash Power Ventures Ltd',sector:'Power',cap:'small',basePrice:18},
  {symbol:'RPOWER',name:'Reliance Power Ltd',sector:'Power',cap:'small',basePrice:42},
  {symbol:'INOXWIND',name:'Inox Wind Ltd',sector:'Power',cap:'small',basePrice:155},
  {symbol:'MAHSEAMLES',name:'Maharashtra Seamless Ltd',sector:'Metals',cap:'small',basePrice:780},
  {symbol:'WELCORP',name:'Welspun Corp Ltd',sector:'Metals',cap:'small',basePrice:520},
  {symbol:'MOIL',name:'MOIL Ltd',sector:'Mining',cap:'small',basePrice:340},
  {symbol:'KIOCL',name:'KIOCL Ltd',sector:'Mining',cap:'small',basePrice:280},
  {symbol:'HLEGLAS',name:'HLE Glascoat Ltd',sector:'Industrial',cap:'small',basePrice:520},
  {symbol:'TDPOWERSYS',name:'TD Power Systems Ltd',sector:'Industrial',cap:'small',basePrice:420},
  {symbol:'AIAENG',name:'AIA Engineering Ltd',sector:'Industrial',cap:'small',basePrice:3800},
  {symbol:'KENNAMETAL',name:'Kennametal India Ltd',sector:'Industrial',cap:'small',basePrice:2400},
  {symbol:'CARBORUNIV',name:'Carborundum Universal Ltd',sector:'Industrial',cap:'small',basePrice:1250},
  {symbol:'ISGEC',name:'Isgec Heavy Engineering Ltd',sector:'Industrial',cap:'small',basePrice:780},
  {symbol:'TRIVENIGR',name:'Triveni Turbine Ltd',sector:'Industrial',cap:'small',basePrice:480},
  {symbol:'ESABINDIA',name:'ESAB India Ltd',sector:'Industrial',cap:'small',basePrice:5800},
  {symbol:'GARFIBRES',name:'Garware Technical Fibres Ltd',sector:'Industrial',cap:'small',basePrice:3200},
  {symbol:'MAPMYINDIA',name:'CE Info Systems Ltd',sector:'IT',cap:'small',basePrice:1850},
  {symbol:'QUICKHEAL',name:'Quick Heal Technologies Ltd',sector:'IT',cap:'small',basePrice:520},
  {symbol:'NUCLEUS',name:'Nucleus Software Exports Ltd',sector:'IT',cap:'small',basePrice:1050},
  {symbol:'NEWGEN',name:'Newgen Software Technologies Ltd',sector:'IT',cap:'small',basePrice:920},
  {symbol:'CYIENT',name:'Cyient Ltd',sector:'IT',cap:'small',basePrice:1750},
  {symbol:'NIITLTD',name:'NIIT Ltd',sector:'IT',cap:'small',basePrice:480},
  {symbol:'KFINTECH',name:'KFin Technologies Ltd',sector:'Fintech',cap:'small',basePrice:680},
  {symbol:'UTIAMC',name:'UTI Asset Management Company Ltd',sector:'Finance',cap:'small',basePrice:820},
  {symbol:'HDFCAMC',name:'HDFC Asset Management Company Ltd',sector:'Finance',cap:'small',basePrice:3800},
  {symbol:'MASFIN',name:'MAS Financial Services Ltd',sector:'Finance',cap:'small',basePrice:780},
  {symbol:'CREDITACC',name:'CreditAccess Grameen Ltd',sector:'Finance',cap:'small',basePrice:1150},
  {symbol:'FUSION',name:'Fusion Micro Finance Ltd',sector:'Finance',cap:'small',basePrice:420},
  {symbol:'SPANDANA',name:'Spandana Sphoorty Financial Ltd',sector:'Finance',cap:'small',basePrice:780},
  {symbol:'SBFC',name:'SBFC Finance Ltd',sector:'Finance',cap:'small',basePrice:82},
  {symbol:'ESAFSFB',name:'ESAF Small Finance Bank Ltd',sector:'Banking',cap:'small',basePrice:55},
  {symbol:'SURYODAY',name:'Suryoday Small Finance Bank Ltd',sector:'Banking',cap:'small',basePrice:135},
  {symbol:'DCBBANK',name:'DCB Bank Ltd',sector:'Banking',cap:'small',basePrice:125},
  {symbol:'KARUR',name:'Karur Vysya Bank Ltd',sector:'Banking',cap:'small',basePrice:185},
  {symbol:'SOUTHBANK',name:'South Indian Bank Ltd',sector:'Banking',cap:'small',basePrice:28},
  {symbol:'GLENMARK',name:'Glenmark Pharmaceuticals Ltd',sector:'Pharma',cap:'small',basePrice:1080},
  {symbol:'SANOFI',name:'Sanofi India Ltd',sector:'Pharma',cap:'small',basePrice:6800},
  {symbol:'PFIZER',name:'Pfizer Ltd',sector:'Pharma',cap:'small',basePrice:4200},
  {symbol:'ABBOTINDIA',name:'Abbott India Ltd',sector:'Pharma',cap:'small',basePrice:24000},
  {symbol:'NOCIL',name:'NOCIL Ltd',sector:'Chemicals',cap:'small',basePrice:260},
  {symbol:'ALKYLAMINE',name:'Alkyl Amines Chemicals Ltd',sector:'Chemicals',cap:'small',basePrice:2200},
  {symbol:'NAVINFLUOR',name:'Navin Fluorine International Ltd',sector:'Chemicals',cap:'small',basePrice:3400},
  {symbol:'SRF',name:'SRF Ltd',sector:'Chemicals',cap:'small',basePrice:2400},
  {symbol:'VINATI',name:'Vinati Organics Ltd',sector:'Chemicals',cap:'small',basePrice:1850},
  {symbol:'ANUPAM',name:'Anupam Rasayan India Ltd',sector:'Chemicals',cap:'small',basePrice:820},
  {symbol:'ROSSARI',name:'Rossari Biotech Ltd',sector:'Chemicals',cap:'small',basePrice:780},
  {symbol:'AARTIIND',name:'Aarti Industries Ltd',sector:'Chemicals',cap:'small',basePrice:580},
  {symbol:'NEOGEN',name:'Neogen Chemicals Ltd',sector:'Chemicals',cap:'small',basePrice:1450},
  {symbol:'ORIENTCEM',name:'Orient Cement Ltd',sector:'Cement',cap:'small',basePrice:195},
  {symbol:'HEIDELBERG',name:'Heidelberg Cement India Ltd',sector:'Cement',cap:'small',basePrice:210},
  {symbol:'PRISMJOHN',name:'Prism Johnson Ltd',sector:'Cement',cap:'small',basePrice:155},
  {symbol:'BIRLACORPN',name:'Birla Corporation Ltd',sector:'Cement',cap:'small',basePrice:1350},
  {symbol:'SAGARCEM',name:'Sagar Cements Ltd',sector:'Cement',cap:'small',basePrice:220},
  {symbol:'WELSPUNIND',name:'Welspun Living Ltd',sector:'Textiles',cap:'small',basePrice:155},
  {symbol:'ARVIND',name:'Arvind Ltd',sector:'Textiles',cap:'small',basePrice:380},
  {symbol:'KPR',name:'KPR Mill Ltd',sector:'Textiles',cap:'small',basePrice:780},
  {symbol:'GOKEX',name:'Gokaldas Exports Ltd',sector:'Textiles',cap:'small',basePrice:820},
  {symbol:'HIMATSEIDE',name:'Himatsingka Seide Ltd',sector:'Textiles',cap:'small',basePrice:155},
  {symbol:'LAXMIMACH',name:'Lakshmi Machine Works Ltd',sector:'Textiles',cap:'small',basePrice:15800},
  {symbol:'SUPRAJIT',name:'Suprajit Engineering Ltd',sector:'Auto Ancillary',cap:'small',basePrice:420},
  {symbol:'ENDURANCE',name:'Endurance Technologies Ltd',sector:'Auto Ancillary',cap:'small',basePrice:1850},
  {symbol:'MINDA',name:'Uno Minda Ltd',sector:'Auto Ancillary',cap:'small',basePrice:780},
  {symbol:'LUMAXTECH',name:'Lumax Auto Technologies Ltd',sector:'Auto Ancillary',cap:'small',basePrice:480},
  {symbol:'SANDHAR',name:'Sandhar Technologies Ltd',sector:'Auto Ancillary',cap:'small',basePrice:520},
  {symbol:'GABRIEL',name:'Gabriel India Ltd',sector:'Auto Ancillary',cap:'small',basePrice:380},
  {symbol:'VARROC',name:'Varroc Engineering Ltd',sector:'Auto Ancillary',cap:'small',basePrice:520},
  {symbol:'JAMNAAUTO',name:'Jamna Auto Industries Ltd',sector:'Auto Ancillary',cap:'small',basePrice:120},
  {symbol:'HFCL',name:'HFCL Ltd',sector:'Telecom',cap:'small',basePrice:95},
  {symbol:'STLTECH',name:'Sterlite Technologies Ltd',sector:'Telecom',cap:'small',basePrice:155},
  {symbol:'TEJAS',name:'Tejas Networks Ltd',sector:'Telecom',cap:'small',basePrice:920},
  {symbol:'RAILTEL',name:'RailTel Corporation of India Ltd',sector:'Telecom',cap:'small',basePrice:380},
  {symbol:'GESHIP',name:'Great Eastern Shipping Company Ltd',sector:'Shipping',cap:'small',basePrice:1050},
  {symbol:'SCI',name:'Shipping Corporation of India Ltd',sector:'Shipping',cap:'small',basePrice:220},
  {symbol:'ALLCARGO',name:'Allcargo Logistics Ltd',sector:'Logistics',cap:'small',basePrice:380},
  {symbol:'BLUEDART',name:'Blue Dart Express Ltd',sector:'Logistics',cap:'small',basePrice:6800},
  {symbol:'VRLLOG',name:'VRL Logistics Ltd',sector:'Logistics',cap:'small',basePrice:520},
  {symbol:'RITES',name:'RITES Ltd',sector:'Infrastructure',cap:'small',basePrice:520},
  {symbol:'BEML',name:'BEML Ltd',sector:'Infrastructure',cap:'small',basePrice:3800},
  {symbol:'TIINDIA',name:'Tube Investments of India Ltd',sector:'Industrial',cap:'small',basePrice:3400},
  {symbol:'MMTC',name:'MMTC Ltd',sector:'Mining',cap:'small',basePrice:72},
  {symbol:'DEEPIND',name:'Deep Industries Ltd',sector:'Oil & Gas',cap:'small',basePrice:520},
  {symbol:'MRPL',name:'Mangalore Refinery and Petrochemicals Ltd',sector:'Oil & Gas',cap:'small',basePrice:155},
  {symbol:'CHENNPETRO',name:'Chennai Petroleum Corporation Ltd',sector:'Oil & Gas',cap:'small',basePrice:680},
  {symbol:'IGL',name:'Indraprastha Gas Ltd',sector:'Oil & Gas',cap:'small',basePrice:480},
  {symbol:'MGL',name:'Mahanagar Gas Ltd',sector:'Oil & Gas',cap:'small',basePrice:1350},
  {symbol:'TCPLPACK',name:'TCPL Packaging Ltd',sector:'Packaging',cap:'small',basePrice:2400},
  {symbol:'HUHTAMAKI',name:'Huhtamaki India Ltd',sector:'Packaging',cap:'small',basePrice:320},
  {symbol:'UFLEX',name:'Uflex Ltd',sector:'Packaging',cap:'small',basePrice:520},
  {symbol:'EPL',name:'EPL Ltd',sector:'Packaging',cap:'small',basePrice:195},
  {symbol:'JKPAPER',name:'JK Paper Ltd',sector:'Paper',cap:'small',basePrice:380},
  {symbol:'TNPL',name:'Tamil Nadu Newsprint and Papers Ltd',sector:'Paper',cap:'small',basePrice:280},
  {symbol:'ANDHRAPAP',name:'Andhra Paper Ltd',sector:'Paper',cap:'small',basePrice:420},
  {symbol:'RCF',name:'Rashtriya Chemicals and Fertilizers Ltd',sector:'Fertilizer',cap:'small',basePrice:145},
  {symbol:'NFL',name:'National Fertilizers Ltd',sector:'Fertilizer',cap:'small',basePrice:92},
  {symbol:'GSFC',name:'Gujarat State Fertilizers and Chemicals Ltd',sector:'Fertilizer',cap:'small',basePrice:175},
  {symbol:'FACT',name:'Fertilisers and Chemicals Travancore Ltd',sector:'Fertilizer',cap:'small',basePrice:680},
  {symbol:'ZUARI',name:'Zuari Agro Chemicals Ltd',sector:'Fertilizer',cap:'small',basePrice:310},
  {symbol:'GOLD1-E',name:'Nippon India Gold ETF',sector:'Commodity ETF',cap:'small',basePrice:113},
  {symbol:'SILVERIETF-E',name:'ICICI Prudential Silver ETF',sector:'Commodity ETF',cap:'small',basePrice:165}
];


const BSE_STOCKS = [
// === LARGE CAP (30 stocks) - Sensex 30 Constituents ===
{symbol:'RELIANCE',name:'Reliance Industries Ltd',sector:'Oil & Gas',cap:'large',basePrice:2950},
{symbol:'TCS',name:'Tata Consultancy Services Ltd',sector:'IT',cap:'large',basePrice:3850},
{symbol:'HDFCBANK',name:'HDFC Bank Ltd',sector:'Banking',cap:'large',basePrice:1720},
{symbol:'INFY',name:'Infosys Ltd',sector:'IT',cap:'large',basePrice:1580},
{symbol:'ICICIBANK',name:'ICICI Bank Ltd',sector:'Banking',cap:'large',basePrice:1280},
{symbol:'HINDUNILVR',name:'Hindustan Unilever Ltd',sector:'FMCG',cap:'large',basePrice:2480},
{symbol:'ITC',name:'ITC Ltd',sector:'FMCG',cap:'large',basePrice:465},
{symbol:'SBIN',name:'State Bank of India',sector:'Banking',cap:'large',basePrice:820},
{symbol:'BHARTIARTL',name:'Bharti Airtel Ltd',sector:'Telecom',cap:'large',basePrice:1650},
{symbol:'KOTAKBANK',name:'Kotak Mahindra Bank Ltd',sector:'Banking',cap:'large',basePrice:1850},
{symbol:'LT',name:'Larsen & Toubro Ltd',sector:'Infrastructure',cap:'large',basePrice:3520},
{symbol:'AXISBANK',name:'Axis Bank Ltd',sector:'Banking',cap:'large',basePrice:1150},
{symbol:'BAJFINANCE',name:'Bajaj Finance Ltd',sector:'Finance',cap:'large',basePrice:6800},
{symbol:'MARUTI',name:'Maruti Suzuki India Ltd',sector:'Auto',cap:'large',basePrice:12500},
{symbol:'TITAN',name:'Titan Company Ltd',sector:'Consumer',cap:'large',basePrice:3250},
{symbol:'SUNPHARMA',name:'Sun Pharmaceutical Industries Ltd',sector:'Pharma',cap:'large',basePrice:1180},
{symbol:'TATAMOTORS',name:'Tata Motors Ltd',sector:'Auto',cap:'large',basePrice:950},
{symbol:'HCLTECH',name:'HCL Technologies Ltd',sector:'IT',cap:'large',basePrice:1520},
{symbol:'NTPC',name:'NTPC Ltd',sector:'Power',cap:'large',basePrice:365},
{symbol:'POWERGRID',name:'Power Grid Corporation of India Ltd',sector:'Power',cap:'large',basePrice:310},
{symbol:'TATASTEEL',name:'Tata Steel Ltd',sector:'Metals',cap:'large',basePrice:155},
{symbol:'NESTLEIND',name:'Nestle India Ltd',sector:'FMCG',cap:'large',basePrice:2400},
{symbol:'ULTRACEMCO',name:'UltraTech Cement Ltd',sector:'Cement',cap:'large',basePrice:10200},
{symbol:'WIPRO',name:'Wipro Ltd',sector:'IT',cap:'large',basePrice:480},
{symbol:'M&M',name:'Mahindra & Mahindra Ltd',sector:'Auto',cap:'large',basePrice:2680},
{symbol:'TECHM',name:'Tech Mahindra Ltd',sector:'IT',cap:'large',basePrice:1380},
{symbol:'ASIANPAINT',name:'Asian Paints Ltd',sector:'Consumer',cap:'large',basePrice:2850},
{symbol:'INDUSINDBK',name:'IndusInd Bank Ltd',sector:'Banking',cap:'large',basePrice:1450},
{symbol:'BAJAJ-AUTO',name:'Bajaj Auto Ltd',sector:'Auto',cap:'large',basePrice:8900},
{symbol:'ADANIENT',name:'Adani Enterprises Ltd',sector:'Infrastructure',cap:'large',basePrice:3100},
// === MID CAP (150 stocks) - BSE MidCap 150 Index ===
{symbol:'ZOMATO',name:'Zomato Ltd',sector:'Internet',cap:'mid',basePrice:240},
{symbol:'PAYTM',name:'One97 Communications Ltd',sector:'Fintech',cap:'mid',basePrice:780},
{symbol:'NYKAA',name:'FSN E-Commerce Ventures Ltd',sector:'E-Commerce',cap:'mid',basePrice:180},
{symbol:'POLICYBZR',name:'PB Fintech Ltd',sector:'Insurance',cap:'mid',basePrice:1650},
{symbol:'DELHIVERY',name:'Delhivery Ltd',sector:'Logistics',cap:'mid',basePrice:420},
{symbol:'MAPMYINDIA',name:'CE Info Systems Ltd',sector:'IT',cap:'mid',basePrice:1800},
{symbol:'IRCTC',name:'Indian Railway Catering & Tourism Corp',sector:'Travel Tech',cap:'mid',basePrice:880},
{symbol:'TRENT',name:'Trent Ltd',sector:'Retail',cap:'mid',basePrice:4200},
{symbol:'MOTHERSON',name:'Samvardhana Motherson International Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:140},
{symbol:'VOLTAS',name:'Voltas Ltd',sector:'Consumer',cap:'mid',basePrice:1150},
{symbol:'MAXHEALTH',name:'Max Healthcare Institute Ltd',sector:'Healthcare',cap:'mid',basePrice:820},
{symbol:'OBEROIRLTY',name:'Oberoi Realty Ltd',sector:'Real Estate',cap:'mid',basePrice:1600},
{symbol:'PHOENIXLTD',name:'The Phoenix Mills Ltd',sector:'Real Estate',cap:'mid',basePrice:1650},
{symbol:'GODREJPROP',name:'Godrej Properties Ltd',sector:'Real Estate',cap:'mid',basePrice:2350},
{symbol:'PRESTIGE',name:'Prestige Estates Projects Ltd',sector:'Real Estate',cap:'mid',basePrice:1280},
{symbol:'MPHASIS',name:'Mphasis Ltd',sector:'IT',cap:'mid',basePrice:2450},
{symbol:'LTIM',name:'LTIMindtree Ltd',sector:'IT',cap:'mid',basePrice:5200},
{symbol:'COFORGE',name:'Coforge Ltd',sector:'IT',cap:'mid',basePrice:5800},
{symbol:'PERSISTENT',name:'Persistent Systems Ltd',sector:'IT',cap:'mid',basePrice:4500},
{symbol:'FEDERALBNK',name:'The Federal Bank Ltd',sector:'Banking',cap:'mid',basePrice:165},
{symbol:'IDFCFIRSTB',name:'IDFC First Bank Ltd',sector:'Banking',cap:'mid',basePrice:72},
{symbol:'BANDHANBNK',name:'Bandhan Bank Ltd',sector:'Banking',cap:'mid',basePrice:213},
{symbol:'AUBANK',name:'AU Small Finance Bank Ltd',sector:'Banking',cap:'mid',basePrice:1030},
{symbol:'MUTHOOTFIN',name:'Muthoot Finance Ltd',sector:'Finance',cap:'mid',basePrice:1750},
{symbol:'CHOLAFIN',name:'Cholamandalam Investment & Finance Co Ltd',sector:'Finance',cap:'mid',basePrice:1320},
{symbol:'SHRIRAMFIN',name:'Shriram Finance Ltd',sector:'Finance',cap:'mid',basePrice:2450},
{symbol:'MANAPPURAM',name:'Manappuram Finance Ltd',sector:'Finance',cap:'mid',basePrice:185},
{symbol:'PIIND',name:'PI Industries Ltd',sector:'Chemicals',cap:'mid',basePrice:3650},
{symbol:'AARTIIND',name:'Aarti Industries Ltd',sector:'Chemicals',cap:'mid',basePrice:580},
{symbol:'DEEPAKNITRO',name:'Deepak Nitrite Ltd',sector:'Chemicals',cap:'mid',basePrice:2100},
{symbol:'SOLARINDS',name:'Solar Industries India Ltd',sector:'Chemicals',cap:'mid',basePrice:8500},
{symbol:'ASTRAL',name:'Astral Ltd',sector:'Industrial',cap:'mid',basePrice:1900},
{symbol:'POLYCAB',name:'Polycab India Ltd',sector:'Electronics',cap:'mid',basePrice:5600},
{symbol:'CUMMINSIND',name:'Cummins India Ltd',sector:'Engineering',cap:'mid',basePrice:2500},
{symbol:'APLAPOLLO',name:'APL Apollo Tubes Ltd',sector:'Metals',cap:'mid',basePrice:1550},
{symbol:'SUPREMEIND',name:'Supreme Industries Ltd',sector:'Industrial',cap:'mid',basePrice:4800},
{symbol:'PAGEIND',name:'Page Industries Ltd',sector:'Textiles',cap:'mid',basePrice:38000},
{symbol:'DIXON',name:'Dixon Technologies India Ltd',sector:'Electronics',cap:'mid',basePrice:5400},
{symbol:'HONAUT',name:'Honeywell Automation India Ltd',sector:'Industrial',cap:'mid',basePrice:42000},
{symbol:'SCHAEFFLER',name:'Schaeffler India Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:3200},
{symbol:'SYNGENE',name:'Syngene International Ltd',sector:'Pharma',cap:'mid',basePrice:780},
{symbol:'AUROPHARMA',name:'Aurobindo Pharma Ltd',sector:'Pharma',cap:'mid',basePrice:1150},
{symbol:'ALKEM',name:'Alkem Laboratories Ltd',sector:'Pharma',cap:'mid',basePrice:5200},
{symbol:'LAURUSLABS',name:'Laurus Labs Ltd',sector:'Pharma',cap:'mid',basePrice:420},
{symbol:'IPCALAB',name:'IPCA Laboratories Ltd',sector:'Pharma',cap:'mid',basePrice:1350},
{symbol:'TORNTPHARM',name:'Torrent Pharmaceuticals Ltd',sector:'Pharma',cap:'mid',basePrice:2600},
{symbol:'JUBLFOOD',name:'Jubilant FoodWorks Ltd',sector:'QSR',cap:'mid',basePrice:520},
{symbol:'DEVYANI',name:'Devyani International Ltd',sector:'QSR',cap:'mid',basePrice:165},
{symbol:'INDIANHOTELS',name:'The Indian Hotels Company Ltd',sector:'Hotels',cap:'mid',basePrice:580},
{symbol:'LEMONTR',name:'Lemon Tree Hotels Ltd',sector:'Hotels',cap:'mid',basePrice:125},
{symbol:'CROMPTON',name:'Crompton Greaves Consumer Electricals Ltd',sector:'Consumer',cap:'mid',basePrice:340},
{symbol:'HAVELLS',name:'Havells India Ltd',sector:'Consumer',cap:'mid',basePrice:1580},
{symbol:'WHIRLPOOL',name:'Whirlpool of India Ltd',sector:'Consumer',cap:'mid',basePrice:1350},
{symbol:'BLUESTARLT',name:'Blue Star Ltd',sector:'Consumer',cap:'mid',basePrice:1250},
{symbol:'METROBRAND',name:'Metro Brands Ltd',sector:'Retail',cap:'mid',basePrice:1200},
{symbol:'VMART',name:'V-Mart Retail Ltd',sector:'Retail',cap:'mid',basePrice:2100},
{symbol:'ABFRL',name:'Aditya Birla Fashion & Retail Ltd',sector:'Fashion',cap:'mid',basePrice:220},
{symbol:'MEDANTA',name:'Global Health Ltd',sector:'Healthcare',cap:'mid',basePrice:1450},
{symbol:'FORTIS',name:'Fortis Healthcare Ltd',sector:'Healthcare',cap:'mid',basePrice:480},
{symbol:'KIMS',name:'Krishna Institute of Medical Sciences Ltd',sector:'Healthcare',cap:'mid',basePrice:2200},
{symbol:'IIFL',name:'IIFL Finance Ltd',sector:'Finance',cap:'mid',basePrice:450},
{symbol:'ANGELONE',name:'Angel One Ltd',sector:'Finance',cap:'mid',basePrice:2400},
{symbol:'BSOFT',name:'Birlasoft Ltd',sector:'IT',cap:'mid',basePrice:620},
{symbol:'ROUTE',name:'Route Mobile Ltd',sector:'IT',cap:'mid',basePrice:1650},
{symbol:'TANLA',name:'Tanla Platforms Ltd',sector:'IT',cap:'mid',basePrice:980},
{symbol:'ZEEL',name:'Zee Entertainment Enterprises Ltd',sector:'Media',cap:'mid',basePrice:135},
{symbol:'SUNTV',name:'Sun TV Network Ltd',sector:'Media',cap:'mid',basePrice:620},
{symbol:'CONCOR',name:'Container Corporation of India Ltd',sector:'Logistics',cap:'mid',basePrice:780},
{symbol:'RVNL',name:'Rail Vikas Nigam Ltd',sector:'Infrastructure',cap:'mid',basePrice:250},
{symbol:'IRFC',name:'Indian Railway Finance Corporation Ltd',sector:'Finance',cap:'mid',basePrice:155},
{symbol:'RECLTD',name:'REC Ltd',sector:'Finance',cap:'mid',basePrice:480},
{symbol:'PFC',name:'Power Finance Corporation Ltd',sector:'Finance',cap:'mid',basePrice:420},
{symbol:'NHPC',name:'NHPC Ltd',sector:'Power',cap:'mid',basePrice:85},
{symbol:'SJVN',name:'SJVN Ltd',sector:'Power',cap:'mid',basePrice:115},
{symbol:'TORNTPOWER',name:'Torrent Power Ltd',sector:'Power',cap:'mid',basePrice:1650},
{symbol:'CESC',name:'CESC Ltd',sector:'Power',cap:'mid',basePrice:155},
{symbol:'TATAPOWER',name:'Tata Power Company Ltd',sector:'Power',cap:'mid',basePrice:420},
{symbol:'ADANIGREEN',name:'Adani Green Energy Ltd',sector:'Energy',cap:'mid',basePrice:1750},
{symbol:'ADANIPORTS',name:'Adani Ports and Special Economic Zone Ltd',sector:'Infrastructure',cap:'mid',basePrice:1280},
{symbol:'GLAND',name:'Gland Pharma Ltd',sector:'Pharma',cap:'mid',basePrice:1650},
{symbol:'BIOCON',name:'Biocon Ltd',sector:'Pharma',cap:'mid',basePrice:320},
{symbol:'CLEAN',name:'Clean Science and Technology Ltd',sector:'Chemicals',cap:'mid',basePrice:1450},
{symbol:'ATUL',name:'Atul Ltd',sector:'Chemicals',cap:'mid',basePrice:6200},
{symbol:'CARBORUNIV',name:'Carborundum Universal Ltd',sector:'Industrial',cap:'mid',basePrice:1150},
{symbol:'GRINDWELL',name:'Grindwell Norton Ltd',sector:'Industrial',cap:'mid',basePrice:2000},
{symbol:'TIINDIA',name:'Tube Investments of India Ltd',sector:'Industrial',cap:'mid',basePrice:3400},
{symbol:'BRIGADE',name:'Brigade Enterprises Ltd',sector:'Real Estate',cap:'mid',basePrice:1150},
{symbol:'LODHA',name:'Macrotech Developers Ltd',sector:'Real Estate',cap:'mid',basePrice:1350},
{symbol:'SONACOMS',name:'Sona BLW Precision Forgings Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:580},
{symbol:'HAPPSTMNDS',name:'Happiest Minds Technologies Ltd',sector:'IT',cap:'mid',basePrice:750},
{symbol:'INTELLECT',name:'Intellect Design Arena Ltd',sector:'IT',cap:'mid',basePrice:680},
{symbol:'FLUOROCHEM',name:'Gujarat Fluorochemicals Ltd',sector:'Chemicals',cap:'mid',basePrice:3200},
{symbol:'ESCORTS',name:'Escorts Kubota Ltd',sector:'Auto',cap:'mid',basePrice:3400},
{symbol:'EICHERMOT',name:'Eicher Motors Ltd',sector:'Auto',cap:'mid',basePrice:4500},
{symbol:'THERMAX',name:'Thermax Ltd',sector:'Engineering',cap:'mid',basePrice:3800},
{symbol:'CGPOWER',name:'CG Power and Industrial Solutions Ltd',sector:'Industrial',cap:'mid',basePrice:520},
{symbol:'BHEL',name:'Bharat Heavy Electricals Ltd',sector:'Engineering',cap:'mid',basePrice:245},
{symbol:'BEL',name:'Bharat Electronics Ltd',sector:'Defence',cap:'mid',basePrice:280},
{symbol:'HAL',name:'Hindustan Aeronautics Ltd',sector:'Defence',cap:'mid',basePrice:4200},
{symbol:'APOLLOTYRE',name:'Apollo Tyres Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:430},
{symbol:'ASTERDM',name:'Aster DM Healthcare Ltd',sector:'Healthcare',cap:'mid',basePrice:820},
{symbol:'ATHERENERG',name:'Ather Energy Ltd',sector:'EV',cap:'mid',basePrice:1282},
{symbol:'ECLERX',name:'eClerx Services Ltd',sector:'IT',cap:'mid',basePrice:3200},
{symbol:'HDFCAMC',name:'HDFC Asset Management Company Ltd',sector:'Finance',cap:'mid',basePrice:4500},
{symbol:'UNIONBANK',name:'Union Bank of India',sector:'Banking',cap:'mid',basePrice:145},
{symbol:'HUDCO',name:'Housing & Urban Development Corporation Ltd',sector:'Finance',cap:'mid',basePrice:230},
{symbol:'ABCAPITAL',name:'Aditya Birla Capital Ltd',sector:'Finance',cap:'mid',basePrice:230},
{symbol:'ICICIGI',name:'ICICI Lombard General Insurance Co Ltd',sector:'Insurance',cap:'mid',basePrice:1680},
{symbol:'SBILIFE',name:'SBI Life Insurance Company Ltd',sector:'Insurance',cap:'mid',basePrice:1580},
{symbol:'HDFCLIFE',name:'HDFC Life Insurance Company Ltd',sector:'Insurance',cap:'mid',basePrice:650},
{symbol:'ICICIPRULI',name:'ICICI Prudential Life Insurance Co Ltd',sector:'Insurance',cap:'mid',basePrice:620},
{symbol:'GICRE',name:'General Insurance Corporation of India',sector:'Insurance',cap:'mid',basePrice:320},
{symbol:'NIACL',name:'The New India Assurance Company Ltd',sector:'Insurance',cap:'mid',basePrice:220},
{symbol:'STARHEALTH',name:'Star Health & Allied Insurance Co Ltd',sector:'Insurance',cap:'mid',basePrice:580},
{symbol:'LICHSGFIN',name:'LIC Housing Finance Ltd',sector:'Finance',cap:'mid',basePrice:450},
{symbol:'CANFINHOME',name:'Can Fin Homes Ltd',sector:'Finance',cap:'mid',basePrice:820},
{symbol:'GMRAIRPORT',name:'GMR Airports Infrastructure Ltd',sector:'Infrastructure',cap:'mid',basePrice:85},
{symbol:'INDIGO',name:'InterGlobe Aviation Ltd',sector:'Aviation',cap:'mid',basePrice:4800},
{symbol:'PETRONET',name:'Petronet LNG Ltd',sector:'Oil & Gas',cap:'mid',basePrice:280},
{symbol:'GAIL',name:'GAIL India Ltd',sector:'Oil & Gas',cap:'mid',basePrice:195},
{symbol:'OIL',name:'Oil India Ltd',sector:'Oil & Gas',cap:'mid',basePrice:520},
{symbol:'HINDPETRO',name:'Hindustan Petroleum Corporation Ltd',sector:'Oil & Gas',cap:'mid',basePrice:420},
{symbol:'BPCL',name:'Bharat Petroleum Corporation Ltd',sector:'Oil & Gas',cap:'mid',basePrice:580},
{symbol:'IOC',name:'Indian Oil Corporation Ltd',sector:'Oil & Gas',cap:'mid',basePrice:165},
{symbol:'COALINDIA',name:'Coal India Ltd',sector:'Mining',cap:'mid',basePrice:480},
{symbol:'NMDC',name:'NMDC Ltd',sector:'Mining',cap:'mid',basePrice:245},
{symbol:'VEDL',name:'Vedanta Ltd',sector:'Metals',cap:'mid',basePrice:420},
{symbol:'HINDZINC',name:'Hindustan Zinc Ltd',sector:'Metals',cap:'mid',basePrice:580},
{symbol:'NATIONALUM',name:'National Aluminium Company Ltd',sector:'Metals',cap:'mid',basePrice:165},
{symbol:'SAIL',name:'Steel Authority of India Ltd',sector:'Metals',cap:'mid',basePrice:120},
{symbol:'JINDALSTEL',name:'Jindal Steel & Power Ltd',sector:'Metals',cap:'mid',basePrice:780},
{symbol:'AMBUJACEM',name:'Ambuja Cements Ltd',sector:'Cement',cap:'mid',basePrice:620},
{symbol:'SHREECEM',name:'Shree Cement Ltd',sector:'Cement',cap:'mid',basePrice:26500},
{symbol:'ACC',name:'ACC Ltd',sector:'Cement',cap:'mid',basePrice:2350},
{symbol:'DALBHARAT',name:'Dalmia Bharat Ltd',sector:'Cement',cap:'mid',basePrice:1850},
{symbol:'RAMCOCEM',name:'The Ramco Cements Ltd',sector:'Cement',cap:'mid',basePrice:920},
{symbol:'PIDILITIND',name:'Pidilite Industries Ltd',sector:'Chemicals',cap:'mid',basePrice:2750},
{symbol:'DABUR',name:'Dabur India Ltd',sector:'FMCG',cap:'mid',basePrice:580},
{symbol:'GODREJCP',name:'Godrej Consumer Products Ltd',sector:'FMCG',cap:'mid',basePrice:1250},
{symbol:'MARICO',name:'Marico Ltd',sector:'FMCG',cap:'mid',basePrice:620},
{symbol:'COLPAL',name:'Colgate-Palmolive India Ltd',sector:'FMCG',cap:'mid',basePrice:2650},
{symbol:'BERGEPAINT',name:'Berger Paints India Ltd',sector:'Consumer',cap:'mid',basePrice:520},
{symbol:'BALKRISHNA',name:'Balkrishna Industries Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:2650},
{symbol:'MRF',name:'MRF Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:125000},
{symbol:'BOSCHLTD',name:'Bosch Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:32000},
{symbol:'EXIDEIND',name:'Exide Industries Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:480},
{symbol:'AMARAJABAT',name:'Amara Raja Energy & Mobility Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:780},
{symbol:'SUNDRMFAST',name:'Sundram Fasteners Ltd',sector:'Auto Ancillary',cap:'mid',basePrice:1050},
{symbol:'SKFINDIA',name:'SKF India Ltd',sector:'Industrial',cap:'mid',basePrice:4800},
{symbol:'TIMKEN',name:'Timken India Ltd',sector:'Industrial',cap:'mid',basePrice:3200},
// === SMALL CAP (250 stocks) - BSE SmallCap 250 Index ===
{symbol:'OLACABS',name:'Ola Electric Mobility Ltd',sector:'EV',cap:'small',basePrice:85},
{symbol:'IDEAFORGE',name:'ideaForge Technology Ltd',sector:'Defence',cap:'small',basePrice:620},
{symbol:'YATHARTH',name:'Yatharth Hospital & Trauma Care Services Ltd',sector:'Healthcare',cap:'small',basePrice:520},
{symbol:'ZAGGLE',name:'Zaggle Prepaid Ocean Services Ltd',sector:'Fintech',cap:'small',basePrice:380},
{symbol:'NETWEB',name:'Netweb Technologies India Ltd',sector:'IT',cap:'small',basePrice:2400},
{symbol:'BONDADA',name:'Bondada Engineering Ltd',sector:'Energy',cap:'small',basePrice:450},
{symbol:'JYOTICTL',name:'Jyoti CNC Automation Ltd',sector:'Industrial',cap:'small',basePrice:1100},
{symbol:'TBOTEK',name:'TBO Tek Ltd',sector:'Travel Tech',cap:'small',basePrice:1500},
{symbol:'JUNIPER',name:'Juniper Hotels Ltd',sector:'Hotels',cap:'small',basePrice:420},
{symbol:'CELLO',name:'Cello World Ltd',sector:'Consumer',cap:'small',basePrice:750},
{symbol:'KAYNES',name:'Kaynes Technology India Ltd',sector:'Electronics',cap:'small',basePrice:3800},
{symbol:'EXICOM',name:'Exicom Tele-Systems Ltd',sector:'EV',cap:'small',basePrice:320},
{symbol:'DOMS',name:'DOMS Industries Ltd',sector:'Stationery',cap:'small',basePrice:2200},
{symbol:'SENCO',name:'Senco Gold Ltd',sector:'Jewellery',cap:'small',basePrice:1100},
{symbol:'SAMHI',name:'Samhi Hotels Ltd',sector:'Hotels',cap:'small',basePrice:280},
{symbol:'CREDO',name:'Credo Brands Marketing Ltd',sector:'Fashion',cap:'small',basePrice:450},
{symbol:'PVRINOX',name:'PVR INOX Ltd',sector:'Entertainment',cap:'small',basePrice:1400},
{symbol:'RATEGAIN',name:'RateGain Travel Technologies Ltd',sector:'Travel Tech',cap:'small',basePrice:680},
{symbol:'SAPPHIRE',name:'Sapphire Foods India Ltd',sector:'QSR',cap:'small',basePrice:1400},
{symbol:'MEDPLUS',name:'MedPlus Health Services Ltd',sector:'Healthcare',cap:'small',basePrice:640},
{symbol:'CAMPUS',name:'Campus Activewear Ltd',sector:'Fashion',cap:'small',basePrice:265},
{symbol:'GPIL',name:'Godawari Power and Ispat Ltd',sector:'Metals',cap:'small',basePrice:850},
{symbol:'GALAXYSURF',name:'Galaxy Surfactants Ltd',sector:'Chemicals',cap:'small',basePrice:2600},
{symbol:'DATAPATTNS',name:'Data Patterns India Ltd',sector:'Defence',cap:'small',basePrice:2400},
{symbol:'PARAS',name:'Paras Defence and Space Technologies Ltd',sector:'Defence',cap:'small',basePrice:980},
{symbol:'MAZAGON',name:'Mazagon Dock Shipbuilders Ltd',sector:'Defence',cap:'small',basePrice:3800},
{symbol:'COCHINSHIP',name:'Cochin Shipyard Ltd',sector:'Defence',cap:'small',basePrice:1850},
{symbol:'GRSE',name:'Garden Reach Shipbuilders & Engineers Ltd',sector:'Defence',cap:'small',basePrice:2100},
{symbol:'LATENTVIEW',name:'Latent View Analytics Ltd',sector:'IT',cap:'small',basePrice:420},
{symbol:'CARTRADE',name:'CarTrade Tech Ltd',sector:'Internet',cap:'small',basePrice:850},
{symbol:'EASEMYTRIP',name:'Easy Trip Planners Ltd',sector:'Travel Tech',cap:'small',basePrice:38},
{symbol:'IXIGO',name:'Le Travenues Technology Ltd',sector:'Travel Tech',cap:'small',basePrice:145},
{symbol:'YATRA',name:'Yatra Online Ltd',sector:'Travel Tech',cap:'small',basePrice:120},
{symbol:'FIVESTAR',name:'Five-Star Business Finance Ltd',sector:'Finance',cap:'small',basePrice:720},
{symbol:'JBMA',name:'JBM Auto Ltd',sector:'Auto Ancillary',cap:'small',basePrice:1750},
{symbol:'LXCHEM',name:'Laxmi Organic Industries Ltd',sector:'Chemicals',cap:'small',basePrice:265},
{symbol:'HOMEFIRST',name:'Home First Finance Company India Ltd',sector:'Finance',cap:'small',basePrice:950},
{symbol:'APTUS',name:'Aptus Value Housing Finance India Ltd',sector:'Finance',cap:'small',basePrice:320},
{symbol:'ELECTRONICA',name:'Electronica Plastic Machines Ltd',sector:'Industrial',cap:'small',basePrice:380},
{symbol:'MASTERTRUST',name:'Mastertrust Ltd',sector:'Finance',cap:'small',basePrice:240},
{symbol:'SYRMA',name:'Syrma SGS Technology Ltd',sector:'Electronics',cap:'small',basePrice:420},
{symbol:'AETHER',name:'Aether Industries Ltd',sector:'Chemicals',cap:'small',basePrice:850},
{symbol:'AVALON',name:'Avalon Technologies Ltd',sector:'Electronics',cap:'small',basePrice:580},
{symbol:'CYIENT',name:'Cyient Ltd',sector:'IT',cap:'small',basePrice:1650},
{symbol:'ZENTEC',name:'Zen Technologies Ltd',sector:'Defence',cap:'small',basePrice:1450},
{symbol:'DREAMFOLKS',name:'Dreamfolks Services Ltd',sector:'Travel Tech',cap:'small',basePrice:420},
{symbol:'EPIGRAL',name:'Epigral Ltd',sector:'Chemicals',cap:'small',basePrice:1650},
{symbol:'SHYAMMET',name:'Shyam Metalics and Energy Ltd',sector:'Metals',cap:'small',basePrice:620},
{symbol:'GRAVITA',name:'Gravita India Ltd',sector:'Metals',cap:'small',basePrice:1850},
{symbol:'CRAFTSMAN',name:'Craftsman Automation Ltd',sector:'Auto Ancillary',cap:'small',basePrice:4500},
{symbol:'TVSHLDGS',name:'TVS Holdings Ltd',sector:'Finance',cap:'small',basePrice:8200},
{symbol:'BIKAJI',name:'Bikaji Foods International Ltd',sector:'FMCG',cap:'small',basePrice:650},
{symbol:'GOPAL',name:'Gopal Snacks Ltd',sector:'FMCG',cap:'small',basePrice:320},
{symbol:'MAMA',name:'Mama Earth (Honasa Consumer Ltd)',sector:'FMCG',cap:'small',basePrice:380},
{symbol:'SBFC',name:'SBFC Finance Ltd',sector:'Finance',cap:'small',basePrice:82},
{symbol:'SIGNATURE',name:'Signature Global India Ltd',sector:'Real Estate',cap:'small',basePrice:1350},
{symbol:'SOBHA',name:'Sobha Ltd',sector:'Real Estate',cap:'small',basePrice:1550},
{symbol:'RAYMOND',name:'Raymond Ltd',sector:'Textiles',cap:'small',basePrice:1650},
{symbol:'KFINTECH',name:'KFin Technologies Ltd',sector:'Fintech',cap:'small',basePrice:680},
{symbol:'CAMS',name:'Computer Age Management Services Ltd',sector:'Fintech',cap:'small',basePrice:3200},
{symbol:'JSWENERGY',name:'JSW Energy Ltd',sector:'Power',cap:'small',basePrice:520},
{symbol:'RENEW',name:'ReNew Energy Global PLC',sector:'Energy',cap:'small',basePrice:450},
{symbol:'SWANENERGY',name:'Swan Energy Ltd',sector:'Energy',cap:'small',basePrice:580},
{symbol:'UCOBANK',name:'UCO Bank',sector:'Banking',cap:'small',basePrice:42},
{symbol:'TRITURBINE',name:'Triveni Turbine Ltd',sector:'Engineering',cap:'small',basePrice:520},
{symbol:'ANURAS',name:'Anupam Rasayan India Ltd',sector:'Chemicals',cap:'small',basePrice:850},
{symbol:'MOTISONS',name:'Motisons Jewellers Ltd',sector:'Jewellery',cap:'small',basePrice:145},
{symbol:'KALYANKJIL',name:'Kalyan Jewellers India Ltd',sector:'Jewellery',cap:'small',basePrice:520},
{symbol:'PNBHOUSING',name:'PNB Housing Finance Ltd',sector:'Finance',cap:'small',basePrice:780},
{symbol:'EQUITAS',name:'Equitas Small Finance Bank Ltd',sector:'Banking',cap:'small',basePrice:95},
{symbol:'UJJIVANSFB',name:'Ujjivan Small Finance Bank Ltd',sector:'Banking',cap:'small',basePrice:42},
{symbol:'INDIGOPNTS',name:'Indigo Paints Ltd',sector:'Consumer',cap:'small',basePrice:1450},
{symbol:'KPITTECH',name:'KPIT Technologies Ltd',sector:'IT',cap:'small',basePrice:1350},
{symbol:'TATAELXSI',name:'Tata Elxsi Ltd',sector:'IT',cap:'small',basePrice:6800},
{symbol:'RRKABEL',name:'R R Kabel Ltd',sector:'Electronics',cap:'small',basePrice:1450},
{symbol:'JKCEMENT',name:'JK Cement Ltd',sector:'Cement',cap:'small',basePrice:3800},
{symbol:'RATNAMANI',name:'Ratnamani Metals & Tubes Ltd',sector:'Metals',cap:'small',basePrice:3100},
{symbol:'HAPPYFORGE',name:'Happy Forgings Ltd',sector:'Industrial',cap:'small',basePrice:850},
{symbol:'WONDERLA',name:'Wonderla Holidays Ltd',sector:'Entertainment',cap:'small',basePrice:780},
{symbol:'IMAGICAA',name:'Imagicaaworld Entertainment Ltd',sector:'Entertainment',cap:'small',basePrice:65},
{symbol:'NAZARA',name:'Nazara Technologies Ltd',sector:'Entertainment',cap:'small',basePrice:820},
{symbol:'RAINBOW',name:'Rainbow Childrens Medicare Ltd',sector:'Healthcare',cap:'small',basePrice:1350},
{symbol:'SUPRIYA',name:'Supriya Lifescience Ltd',sector:'Pharma',cap:'small',basePrice:420},
{symbol:'WINDLAS',name:'Windlas Biotech Ltd',sector:'Pharma',cap:'small',basePrice:680},
{symbol:'EMUDHRA',name:'eMudhra Ltd',sector:'IT',cap:'small',basePrice:650},
{symbol:'TRACXN',name:'Tracxn Technologies Ltd',sector:'Fintech',cap:'small',basePrice:85},
{symbol:'INFOBEANS',name:'InfoBeans Technologies Ltd',sector:'IT',cap:'small',basePrice:420},
{symbol:'GPPL',name:'Gujarat Pipavav Port Ltd',sector:'Logistics',cap:'small',basePrice:185},
{symbol:'MAHLIFE',name:'Mahindra Lifespace Developers Ltd',sector:'Real Estate',cap:'small',basePrice:520},
{symbol:'REFEX',name:'Refex Industries Ltd',sector:'Industrial',cap:'small',basePrice:480},
{symbol:'FIEMIND',name:'Fiem Industries Ltd',sector:'Auto Ancillary',cap:'small',basePrice:1250},
{symbol:'GREENPANEL',name:'Greenpanel Industries Ltd',sector:'Industrial',cap:'small',basePrice:320},
{symbol:'PENIND',name:'Pennar Industries Ltd',sector:'Metals',cap:'small',basePrice:155},
{symbol:'HGINFRA',name:'H.G. Infra Engineering Ltd',sector:'Infrastructure',cap:'small',basePrice:1350},
{symbol:'WOCKPHARMA',name:'Wockhardt Ltd',sector:'Pharma',cap:'small',basePrice:580},
{symbol:'ROSSARI',name:'Rossari Biotech Ltd',sector:'Chemicals',cap:'small',basePrice:750},
{symbol:'ETHOSLTD',name:'Ethos Ltd',sector:'Retail',cap:'small',basePrice:2400},
{symbol:'GOCOLORS',name:'Go Fashion India Ltd',sector:'Fashion',cap:'small',basePrice:1050},
{symbol:'VEDANT',name:'Vedant Fashions Ltd',sector:'Fashion',cap:'small',basePrice:1150},
{symbol:'HARSHA',name:'Harsha Engineers International Ltd',sector:'Industrial',cap:'small',basePrice:450},
{symbol:'HINDCOPPER',name:'Hindustan Copper Ltd',sector:'Metals',cap:'small',basePrice:280},
{symbol:'TARSONS',name:'Tarsons Products Ltd',sector:'Healthcare',cap:'small',basePrice:420},
{symbol:'YESBANK',name:'Yes Bank Ltd',sector:'Banking',cap:'small',basePrice:22},
{symbol:'GROWW',name:'Groww (Billdesk parent - NextBillion Technology)',sector:'Fintech',cap:'small',basePrice:250},
{symbol:'VIYASH',name:'Viyash Life Sciences Ltd',sector:'Pharma',cap:'small',basePrice:1200},
{symbol:'FCL',name:'Fineotex Chemical Ltd',sector:'Chemicals',cap:'small',basePrice:85},
{symbol:'KWIL',name:'KW International Ltd',sector:'Real Estate',cap:'small',basePrice:3400},
{symbol:'IDEA',name:'Vodafone Idea Ltd',sector:'Telecom',cap:'small',basePrice:14},
{symbol:'AMIORG',name:'Ami Organics Ltd',sector:'Chemicals',cap:'small',basePrice:1050},
{symbol:'ACE',name:'Action Construction Equipment Ltd',sector:'Industrial',cap:'small',basePrice:280},
{symbol:'ALKYLAMINE',name:'Alkyl Amines Chemicals Ltd',sector:'Chemicals',cap:'small',basePrice:2200},
{symbol:'AMBER',name:'Amber Enterprises India Ltd',sector:'Electronics',cap:'small',basePrice:4500},
{symbol:'ANDHRAPET',name:'Andhra Petrochemicals Ltd',sector:'Chemicals',cap:'small',basePrice:120},
{symbol:'APLLTD',name:'Alembic Pharmaceuticals Ltd',sector:'Pharma',cap:'small',basePrice:680},
{symbol:'ARCHEAN',name:'Archean Chemical Industries Ltd',sector:'Chemicals',cap:'small',basePrice:620},
{symbol:'ARVINDFASHN',name:'Arvind Fashions Ltd',sector:'Fashion',cap:'small',basePrice:420},
{symbol:'ASAHISONG',name:'Asahi Songwon Colors Ltd',sector:'Chemicals',cap:'small',basePrice:280},
{symbol:'ASHIANA',name:'Ashiana Housing Ltd',sector:'Real Estate',cap:'small',basePrice:320},
{symbol:'ASTEC',name:'Astec LifeSciences Ltd',sector:'Chemicals',cap:'small',basePrice:1650},
{symbol:'AURIONPRO',name:'Aurionpro Solutions Ltd',sector:'IT',cap:'small',basePrice:1450},
{symbol:'AVANTIFEED',name:'Avanti Feeds Ltd',sector:'FMCG',cap:'small',basePrice:520},
{symbol:'BAJAJHCARE',name:'Bajaj Healthcare Ltd',sector:'Pharma',cap:'small',basePrice:420},
{symbol:'BANARISUG',name:'Balrampur Chini Mills Ltd',sector:'Sugar',cap:'small',basePrice:3200},
{symbol:'BASF',name:'BASF India Ltd',sector:'Chemicals',cap:'small',basePrice:3800},
{symbol:'BECTORFOOD',name:'Mrs Bectors Food Specialities Ltd',sector:'FMCG',cap:'small',basePrice:380},
{symbol:'BEML',name:'BEML Ltd',sector:'Industrial',cap:'small',basePrice:3200},
{symbol:'BLKASHYAP',name:'B L Kashyap and Sons Ltd',sector:'Infrastructure',cap:'small',basePrice:180},
{symbol:'BODALCHEM',name:'Bodal Chemicals Ltd',sector:'Chemicals',cap:'small',basePrice:120},
{symbol:'CANARA',name:'Canara Bank',sector:'Banking',cap:'small',basePrice:580},
{symbol:'CAPACITE',name:'Capacite Infraprojects Ltd',sector:'Infrastructure',cap:'small',basePrice:280},
{symbol:'CARYSIL',name:'Carysil Ltd',sector:'Consumer',cap:'small',basePrice:650},
{symbol:'CASTROLIND',name:'Castrol India Ltd',sector:'Oil & Gas',cap:'small',basePrice:220},
{symbol:'CCL',name:'CCL Products India Ltd',sector:'FMCG',cap:'small',basePrice:580},
{symbol:'CENTURYPLY',name:'Century Plyboards India Ltd',sector:'Industrial',cap:'small',basePrice:680},
{symbol:'CHALET',name:'Chalet Hotels Ltd',sector:'Hotels',cap:'small',basePrice:420},
{symbol:'CHEMCON',name:'Chemcon Speciality Chemicals Ltd',sector:'Chemicals',cap:'small',basePrice:380},
{symbol:'CHENNPETRO',name:'Chennai Petroleum Corporation Ltd',sector:'Oil & Gas',cap:'small',basePrice:850},
{symbol:'CMSINFO',name:'CMS Info Systems Ltd',sector:'Finance',cap:'small',basePrice:420},
{symbol:'COCHINREF',name:'Cochin Refineries (BPCL Kochi)',sector:'Oil & Gas',cap:'small',basePrice:180},
{symbol:'CONCORDBIO',name:'Concord Biotech Ltd',sector:'Pharma',cap:'small',basePrice:580},
{symbol:'CONTROLPR',name:'Control Print Ltd',sector:'Industrial',cap:'small',basePrice:680},
{symbol:'CSBBANK',name:'CSB Bank Ltd',sector:'Banking',cap:'small',basePrice:320},
{symbol:'DEEPAKFERT',name:'Deepak Fertilisers & Petrochemicals Corp Ltd',sector:'Fertilizer',cap:'small',basePrice:520},
{symbol:'DHANUKA',name:'Dhanuka Agritech Ltd',sector:'Chemicals',cap:'small',basePrice:1350},
{symbol:'ELECON',name:'Elecon Engineering Company Ltd',sector:'Engineering',cap:'small',basePrice:580},
{symbol:'ELGIEQUIP',name:'Elgi Equipments Ltd',sector:'Industrial',cap:'small',basePrice:520},
{symbol:'EMAMILTD',name:'Emami Ltd',sector:'FMCG',cap:'small',basePrice:580},
{symbol:'ERIS',name:'Eris Lifesciences Ltd',sector:'Pharma',cap:'small',basePrice:950},
{symbol:'ESABINDIA',name:'ESAB India Ltd',sector:'Industrial',cap:'small',basePrice:4200},
{symbol:'FILATEX',name:'Filatex India Ltd',sector:'Textiles',cap:'small',basePrice:65},
{symbol:'FINOLEXIND',name:'Finolex Industries Ltd',sector:'Industrial',cap:'small',basePrice:220},
{symbol:'GABRIEL',name:'Gabriel India Ltd',sector:'Auto Ancillary',cap:'small',basePrice:380},
{symbol:'GARFIBRES',name:'Garware Technical Fibres Ltd',sector:'Textiles',cap:'small',basePrice:2800},
{symbol:'GATEWAY',name:'Gateway Distriparks Ltd',sector:'Logistics',cap:'small',basePrice:85},
{symbol:'GENUSPOWER',name:'Genus Power Infrastructures Ltd',sector:'Power',cap:'small',basePrice:320},
{symbol:'GESHIP',name:'Great Eastern Shipping Company Ltd',sector:'Shipping',cap:'small',basePrice:850},
{symbol:'GHCL',name:'GHCL Ltd',sector:'Chemicals',cap:'small',basePrice:520},
{symbol:'GLENMARK',name:'Glenmark Pharmaceuticals Ltd',sector:'Pharma',cap:'small',basePrice:1450},
{symbol:'GMDCLTD',name:'Gujarat Mineral Development Corporation Ltd',sector:'Mining',cap:'small',basePrice:320},
{symbol:'GNFC',name:'Gujarat Narmada Valley Fertilizers & Chemicals Ltd',sector:'Fertilizer',cap:'small',basePrice:620},
{symbol:'GODFRYPHLP',name:'Godfrey Phillips India Ltd',sector:'FMCG',cap:'small',basePrice:4800},
{symbol:'GODREJIND',name:'Godrej Industries Ltd',sector:'Industrial',cap:'small',basePrice:680},
{symbol:'GOLDIAM',name:'Goldiam International Ltd',sector:'Jewellery',cap:'small',basePrice:280},
{symbol:'GRAUER',name:'Grauer & Weil India Ltd',sector:'Chemicals',cap:'small',basePrice:3200},
{symbol:'GUJGAS',name:'Gujarat Gas Ltd',sector:'Oil & Gas',cap:'small',basePrice:520},
{symbol:'HATHWAY',name:'Hathway Cable & Datacom Ltd',sector:'Telecom',cap:'small',basePrice:22},
{symbol:'HERITGFOOD',name:'Heritage Foods Ltd',sector:'FMCG',cap:'small',basePrice:520},
{symbol:'HIKAL',name:'Hikal Ltd',sector:'Chemicals',cap:'small',basePrice:280},
{symbol:'HIL',name:'HIL Ltd',sector:'Industrial',cap:'small',basePrice:6800},
{symbol:'HLEGLAS',name:'HLE Glascoat Ltd',sector:'Industrial',cap:'small',basePrice:580},
{symbol:'HSCL',name:'Hindustan Steelworks Construction Ltd',sector:'Infrastructure',cap:'small',basePrice:85},
{symbol:'ICRA',name:'ICRA Ltd',sector:'Finance',cap:'small',basePrice:5200},
{symbol:'IGARASHI',name:'Igarashi Motors India Ltd',sector:'Auto Ancillary',cap:'small',basePrice:480},
{symbol:'IMFA',name:'Indian Metals & Ferro Alloys Ltd',sector:'Metals',cap:'small',basePrice:580},
{symbol:'INDIAMART',name:'IndiaMART InterMESH Ltd',sector:'Internet',cap:'small',basePrice:2800},
{symbol:'INDOSTAR',name:'IndoStar Capital Finance Ltd',sector:'Finance',cap:'small',basePrice:280},
{symbol:'INFIBEAM',name:'Infibeam Avenues Ltd',sector:'Fintech',cap:'small',basePrice:28},
{symbol:'IONEXCHANG',name:'Ion Exchange India Ltd',sector:'Industrial',cap:'small',basePrice:420},
{symbol:'ISEC',name:'ICICI Securities Ltd',sector:'Finance',cap:'small',basePrice:780},
{symbol:'ITI',name:'ITI Ltd',sector:'Telecom',cap:'small',basePrice:280},
{symbol:'JAMNAAUTO',name:'Jamna Auto Industries Ltd',sector:'Auto Ancillary',cap:'small',basePrice:95},
{symbol:'JAYNECOIND',name:'Jay Neco Industries Ltd',sector:'Metals',cap:'small',basePrice:120},
{symbol:'JCHAC',name:'Johnson Controls-Hitachi Air Conditioning India Ltd',sector:'Consumer',cap:'small',basePrice:2200},
{symbol:'JETAIRWAYS',name:'Jet Airways India Ltd',sector:'Aviation',cap:'small',basePrice:22},
{symbol:'JINDALSAW',name:'Jindal SAW Ltd',sector:'Metals',cap:'small',basePrice:380},
{symbol:'JMC',name:'JMC Projects India Ltd',sector:'Infrastructure',cap:'small',basePrice:85},
{symbol:'JMFINANCIL',name:'JM Financial Ltd',sector:'Finance',cap:'small',basePrice:85},
{symbol:'JKLAKSHMI',name:'JK Lakshmi Cement Ltd',sector:'Cement',cap:'small',basePrice:780},
{symbol:'JKTYRE',name:'JK Tyre & Industries Ltd',sector:'Auto Ancillary',cap:'small',basePrice:380},
{symbol:'JUBLPHARMA',name:'Jubilant Pharmova Ltd',sector:'Pharma',cap:'small',basePrice:580},
{symbol:'JUSTDIAL',name:'Just Dial Ltd',sector:'Internet',cap:'small',basePrice:1050},
{symbol:'KABRAEXTRU',name:'Kabra Extrusiontechnik Ltd',sector:'Industrial',cap:'small',basePrice:320},
{symbol:'KANSAINER',name:'Kansai Nerolac Paints Ltd',sector:'Consumer',cap:'small',basePrice:280},
{symbol:'KENNAMET',name:'Kennametal India Ltd',sector:'Industrial',cap:'small',basePrice:2200},
{symbol:'KIRLOSENG',name:'Kirloskar Oil Engines Ltd',sector:'Engineering',cap:'small',basePrice:480},
{symbol:'KIRLOSBROS',name:'Kirloskar Brothers Ltd',sector:'Engineering',cap:'small',basePrice:850},
{symbol:'KOKUYOCMLN',name:'Kokuyo Camlin Ltd',sector:'Stationery',cap:'small',basePrice:280},
{symbol:'KOLTEPATIL',name:'Kolte-Patil Developers Ltd',sector:'Real Estate',cap:'small',basePrice:320},
{symbol:'KPRMILL',name:'KPR Mill Ltd',sector:'Textiles',cap:'small',basePrice:680},
{symbol:'KRBL',name:'KRBL Ltd',sector:'FMCG',cap:'small',basePrice:280},
{symbol:'KTKBANK',name:'Karnataka Bank Ltd',sector:'Banking',cap:'small',basePrice:85},
{symbol:'LALPATHLAB',name:'Dr Lal PathLabs Ltd',sector:'Healthcare',cap:'small',basePrice:2800},
{symbol:'LUXIND',name:'Lux Industries Ltd',sector:'Textiles',cap:'small',basePrice:1850},
{symbol:'MAITHANALL',name:'Maithan Alloys Ltd',sector:'Metals',cap:'small',basePrice:1050},
{symbol:'MANINFRA',name:'Man Infraconstruction Ltd',sector:'Infrastructure',cap:'small',basePrice:180},
{symbol:'MANORAMA',name:'Manorama Industries Ltd',sector:'FMCG',cap:'small',basePrice:420},
{symbol:'MASTEK',name:'Mastek Ltd',sector:'IT',cap:'small',basePrice:2400},
{symbol:'MAYURUNIQ',name:'Mayur Uniquoters Ltd',sector:'Textiles',cap:'small',basePrice:420},
{symbol:'MRPL',name:'Mangalore Refinery and Petrochemicals Ltd',sector:'Oil & Gas',cap:'small',basePrice:180},
{symbol:'MSTCLTD',name:'MSTC Ltd',sector:'Industrial',cap:'small',basePrice:420},
{symbol:'NATCOPHARM',name:'Natco Pharma Ltd',sector:'Pharma',cap:'small',basePrice:780},
{symbol:'NAVINFLUOR',name:'Navin Fluorine International Ltd',sector:'Chemicals',cap:'small',basePrice:3800},
{symbol:'NESCO',name:'Nesco Ltd',sector:'Real Estate',cap:'small',basePrice:850},
{symbol:'NILKAMAL',name:'Nilkamal Ltd',sector:'Consumer',cap:'small',basePrice:2400},
{symbol:'NUVOCO',name:'Nuvoco Vistas Corporation Ltd',sector:'Cement',cap:'small',basePrice:380},
{symbol:'ORIENTCEM',name:'Orient Cement Ltd',sector:'Cement',cap:'small',basePrice:180},
{symbol:'ORIENTELEC',name:'Orient Electric Ltd',sector:'Consumer',cap:'small',basePrice:280},
{symbol:'PRAJIND',name:'Praj Industries Ltd',sector:'Engineering',cap:'small',basePrice:680},
{symbol:'PRSMJOHNSN',name:'Prism Johnson Ltd',sector:'Cement',cap:'small',basePrice:120},
{symbol:'QUESS',name:'Quess Corp Ltd',sector:'Industrial',cap:'small',basePrice:620},
{symbol:'RAJESHEXPO',name:'Rajesh Exports Ltd',sector:'Jewellery',cap:'small',basePrice:520},
{symbol:'RALLIS',name:'Rallis India Ltd',sector:'Chemicals',cap:'small',basePrice:280},
{symbol:'RBLBANK',name:'RBL Bank Ltd',sector:'Banking',cap:'small',basePrice:220},
{symbol:'REDINGTON',name:'Redington Ltd',sector:'IT',cap:'small',basePrice:180},
{symbol:'RELIGARE',name:'Religare Enterprises Ltd',sector:'Finance',cap:'small',basePrice:280},
{symbol:'REPRO',name:'Repro India Ltd',sector:'Industrial',cap:'small',basePrice:780},
{symbol:'RITES',name:'RITES Ltd',sector:'Infrastructure',cap:'small',basePrice:520},
{symbol:'RSYSTEMS',name:'R Systems International Ltd',sector:'IT',cap:'small',basePrice:520},
{symbol:'SANOFI',name:'Sanofi India Ltd',sector:'Pharma',cap:'small',basePrice:6200},
{symbol:'SEQUENT',name:'Sequent Scientific Ltd',sector:'Pharma',cap:'small',basePrice:180},
{symbol:'SHARDACROP',name:'Sharda Cropchem Ltd',sector:'Chemicals',cap:'small',basePrice:520},
{symbol:'SHOPERSTOP',name:'Shoppers Stop Ltd',sector:'Retail',cap:'small',basePrice:780},
{symbol:'SJFL',name:'Sheela Foam Ltd',sector:'Consumer',cap:'small',basePrice:320},
{symbol:'SOLARA',name:'Solara Active Pharma Sciences Ltd',sector:'Pharma',cap:'small',basePrice:280},
{symbol:'SOUTHBANK',name:'South Indian Bank Ltd',sector:'Banking',cap:'small',basePrice:28},
{symbol:'STARCEMENT',name:'Star Cement Ltd',sector:'Cement',cap:'small',basePrice:120},
{symbol:'STLTECH',name:'Sterlite Technologies Ltd',sector:'Telecom',cap:'small',basePrice:120},
{symbol:'SUNDARAM',name:'Sundaram Finance Ltd',sector:'Finance',cap:'small',basePrice:1050},
{symbol:'SUPRAJIT',name:'Suprajit Engineering Ltd',sector:'Auto Ancillary',cap:'small',basePrice:420},
{symbol:'SUVEN',name:'Suven Pharmaceuticals Ltd',sector:'Pharma',cap:'small',basePrice:520},
{symbol:'SYMPHONY',name:'Symphony Ltd',sector:'Consumer',cap:'small',basePrice:1250},
{symbol:'TAINWALCHM',name:'Tainwala Chemicals & Plastics India Ltd',sector:'Chemicals',cap:'small',basePrice:1850},
{symbol:'TATAINVEST',name:'Tata Investment Corporation Ltd',sector:'Finance',cap:'small',basePrice:2800},
{symbol:'TDPOWER',name:'TD Power Systems Ltd',sector:'Power',cap:'small',basePrice:420},
{symbol:'TEAMLEASE',name:'TeamLease Services Ltd',sector:'Industrial',cap:'small',basePrice:2800},
{symbol:'THYROCARE',name:'Thyrocare Technologies Ltd',sector:'Healthcare',cap:'small',basePrice:580},
{symbol:'TITAGARH',name:'Titagarh Rail Systems Ltd',sector:'Industrial',cap:'small',basePrice:850},
{symbol:'TMB',name:'Tamilnad Mercantile Bank Ltd',sector:'Banking',cap:'small',basePrice:480},
{symbol:'TRIDENT',name:'Trident Ltd',sector:'Textiles',cap:'small',basePrice:35},
{symbol:'TTKPRESTIG',name:'TTK Prestige Ltd',sector:'Consumer',cap:'small',basePrice:7800},
{symbol:'TMCV',name:'Tata Motors Commercial Vehicles',sector:'Auto',cap:'mid',basePrice:223},
{symbol:'TMPV',name:'Tata Motors Passenger Vehicles',sector:'Auto',cap:'mid',basePrice:494}
];


const NASDAQ_STOCKS = [
  // === LARGE CAP (100 stocks) — NASDAQ-100 Constituents ===
  {symbol:'AAPL',name:'Apple Inc.',sector:'Technology',cap:'large',basePrice:195,currency:'
</body>
</html>
},
  {symbol:'MSFT',name:'Microsoft Corporation',sector:'Technology',cap:'large',basePrice:430,currency:'
</body>
</html>
},
  {symbol:'GOOGL',name:'Alphabet Inc.',sector:'Technology',cap:'large',basePrice:175,currency:'
</body>
</html>
},
  {symbol:'AMZN',name:'Amazon.com Inc.',sector:'E-Commerce',cap:'large',basePrice:185,currency:'
</body>
</html>
},
  {symbol:'NVDA',name:'NVIDIA Corporation',sector:'Semiconductors',cap:'large',basePrice:135,currency:'
</body>
</html>
},
  {symbol:'META',name:'Meta Platforms Inc.',sector:'Technology',cap:'large',basePrice:510,currency:'
</body>
</html>
},
  {symbol:'TSLA',name:'Tesla Inc.',sector:'Auto/EV',cap:'large',basePrice:250,currency:'
</body>
</html>
},
  {symbol:'AVGO',name:'Broadcom Inc.',sector:'Semiconductors',cap:'large',basePrice:165,currency:'
</body>
</html>
},
  {symbol:'COST',name:'Costco Wholesale Corporation',sector:'Retail',cap:'large',basePrice:720,currency:'
</body>
</html>
},
  {symbol:'NFLX',name:'Netflix Inc.',sector:'Entertainment',cap:'large',basePrice:630,currency:'
</body>
</html>
},
  {symbol:'AMD',name:'Advanced Micro Devices Inc.',sector:'Semiconductors',cap:'large',basePrice:155,currency:'
</body>
</html>
},
  {symbol:'ADBE',name:'Adobe Inc.',sector:'Software',cap:'large',basePrice:530,currency:'
</body>
</html>
},
  {symbol:'PEP',name:'PepsiCo Inc.',sector:'Consumer',cap:'large',basePrice:175,currency:'
</body>
</html>
},
  {symbol:'INTC',name:'Intel Corporation',sector:'Semiconductors',cap:'large',basePrice:32,currency:'
</body>
</html>
},
  {symbol:'CMCSA',name:'Comcast Corporation',sector:'Media',cap:'large',basePrice:42,currency:'
</body>
</html>
},
  {symbol:'QCOM',name:'Qualcomm Inc.',sector:'Semiconductors',cap:'large',basePrice:175,currency:'
</body>
</html>
},
  {symbol:'INTU',name:'Intuit Inc.',sector:'Software',cap:'large',basePrice:620,currency:'
</body>
</html>
},
  {symbol:'AMAT',name:'Applied Materials Inc.',sector:'Semiconductors',cap:'large',basePrice:195,currency:'
</body>
</html>
},
  {symbol:'ISRG',name:'Intuitive Surgical Inc.',sector:'Healthcare',cap:'large',basePrice:400,currency:'
</body>
</html>
},
  {symbol:'BKNG',name:'Booking Holdings Inc.',sector:'Travel',cap:'large',basePrice:3800,currency:'
</body>
</html>
},
  {symbol:'LRCX',name:'Lam Research Corporation',sector:'Semiconductors',cap:'large',basePrice:920,currency:'
</body>
</html>
},
  {symbol:'MU',name:'Micron Technology Inc.',sector:'Semiconductors',cap:'large',basePrice:110,currency:'
</body>
</html>
},
  {symbol:'REGN',name:'Regeneron Pharmaceuticals Inc.',sector:'Biotech',cap:'large',basePrice:980,currency:'
</body>
</html>
},
  {symbol:'KLAC',name:'KLA Corporation',sector:'Semiconductors',cap:'large',basePrice:680,currency:'
</body>
</html>
},
  {symbol:'PANW',name:'Palo Alto Networks Inc.',sector:'Cybersecurity',cap:'large',basePrice:310,currency:'
</body>
</html>
},
  {symbol:'SNPS',name:'Synopsys Inc.',sector:'Software',cap:'large',basePrice:540,currency:'
</body>
</html>
},
  {symbol:'CDNS',name:'Cadence Design Systems Inc.',sector:'Software',cap:'large',basePrice:290,currency:'
</body>
</html>
},
  {symbol:'MRVL',name:'Marvell Technology Inc.',sector:'Semiconductors',cap:'large',basePrice:72,currency:'
</body>
</html>
},
  {symbol:'ABNB',name:'Airbnb Inc.',sector:'Travel',cap:'large',basePrice:150,currency:'
</body>
</html>
},
  {symbol:'FTNT',name:'Fortinet Inc.',sector:'Cybersecurity',cap:'large',basePrice:75,currency:'
</body>
</html>
},
  {symbol:'CRWD',name:'CrowdStrike Holdings Inc.',sector:'Cybersecurity',cap:'large',basePrice:320,currency:'
</body>
</html>
},
  {symbol:'DDOG',name:'Datadog Inc.',sector:'Cloud',cap:'large',basePrice:125,currency:'
</body>
</html>
},
  {symbol:'ZS',name:'Zscaler Inc.',sector:'Cybersecurity',cap:'large',basePrice:220,currency:'
</body>
</html>
},
  {symbol:'LULU',name:'Lululemon Athletica Inc.',sector:'Retail',cap:'large',basePrice:420,currency:'
</body>
</html>
},
  {symbol:'MDLZ',name:'Mondelez International Inc.',sector:'Consumer',cap:'large',basePrice:72,currency:'
</body>
</html>
},
  {symbol:'GILD',name:'Gilead Sciences Inc.',sector:'Biotech',cap:'large',basePrice:85,currency:'
</body>
</html>
},
  {symbol:'AMGN',name:'Amgen Inc.',sector:'Biotech',cap:'large',basePrice:290,currency:'
</body>
</html>
},
  {symbol:'ADP',name:'Automatic Data Processing Inc.',sector:'Technology',cap:'large',basePrice:265,currency:'
</body>
</html>
},
  {symbol:'CSX',name:'CSX Corporation',sector:'Technology',cap:'large',basePrice:35,currency:'
</body>
</html>
},
  {symbol:'SBUX',name:'Starbucks Corporation',sector:'QSR',cap:'large',basePrice:95,currency:'
</body>
</html>
},
  {symbol:'MNST',name:'Monster Beverage Corporation',sector:'Consumer',cap:'large',basePrice:56,currency:'
</body>
</html>
},
  {symbol:'PYPL',name:'PayPal Holdings Inc.',sector:'Fintech',cap:'large',basePrice:65,currency:'
</body>
</html>
},
  {symbol:'ORLY',name:'O\'Reilly Automotive Inc.',sector:'Retail',cap:'large',basePrice:1050,currency:'
</body>
</html>
},
  {symbol:'CEG',name:'Constellation Energy Corp.',sector:'Technology',cap:'large',basePrice:180,currency:'
</body>
</html>
},
  {symbol:'MELI',name:'MercadoLibre Inc.',sector:'E-Commerce',cap:'large',basePrice:1680,currency:'
</body>
</html>
},
  {symbol:'TEAM',name:'Atlassian Corporation',sector:'Software',cap:'large',basePrice:240,currency:'
</body>
</html>
},
  {symbol:'WDAY',name:'Workday Inc.',sector:'Cloud',cap:'large',basePrice:270,currency:'
</body>
</html>
},
  {symbol:'CTAS',name:'Cintas Corporation',sector:'Consumer',cap:'large',basePrice:620,currency:'
</body>
</html>
},
  {symbol:'VRSK',name:'Verisk Analytics Inc.',sector:'Technology',cap:'large',basePrice:245,currency:'
</body>
</html>
},
  {symbol:'ROP',name:'Roper Technologies Inc.',sector:'Technology',cap:'large',basePrice:560,currency:'
</body>
</html>
},
  {symbol:'ODFL',name:'Old Dominion Freight Line Inc.',sector:'Technology',cap:'large',basePrice:420,currency:'
</body>
</html>
},
  {symbol:'IDXX',name:'IDEXX Laboratories Inc.',sector:'Healthcare',cap:'large',basePrice:520,currency:'
</body>
</html>
},
  {symbol:'FAST',name:'Fastenal Company',sector:'Retail',cap:'large',basePrice:72,currency:'
</body>
</html>
},
  {symbol:'EA',name:'Electronic Arts Inc.',sector:'Gaming',cap:'large',basePrice:140,currency:'
</body>
</html>
},
  {symbol:'ANSS',name:'ANSYS Inc.',sector:'Software',cap:'large',basePrice:330,currency:'
</body>
</html>
},
  {symbol:'DXCM',name:'DexCom Inc.',sector:'Healthcare',cap:'large',basePrice:120,currency:'
</body>
</html>
},
  {symbol:'PCAR',name:'PACCAR Inc.',sector:'Auto/EV',cap:'large',basePrice:95,currency:'
</body>
</html>
},
  {symbol:'CPRT',name:'Copart Inc.',sector:'Technology',cap:'large',basePrice:48,currency:'
</body>
</html>
},
  {symbol:'ROST',name:'Ross Stores Inc.',sector:'Retail',cap:'large',basePrice:145,currency:'
</body>
</html>
},
  {symbol:'PAYX',name:'Paychex Inc.',sector:'Technology',cap:'large',basePrice:120,currency:'
</body>
</html>
},
  {symbol:'KDP',name:'Keurig Dr Pepper Inc.',sector:'Consumer',cap:'large',basePrice:35,currency:'
</body>
</html>
},
  {symbol:'AZN',name:'AstraZeneca PLC',sector:'Biotech',cap:'large',basePrice:70,currency:'
</body>
</html>
},
  {symbol:'NXPI',name:'NXP Semiconductors NV',sector:'Semiconductors',cap:'large',basePrice:230,currency:'
</body>
</html>
},
  {symbol:'GEHC',name:'GE HealthCare Technologies Inc.',sector:'Healthcare',cap:'large',basePrice:82,currency:'
</body>
</html>
},
  {symbol:'EXC',name:'Exelon Corporation',sector:'Technology',cap:'large',basePrice:42,currency:'
</body>
</html>
},
  {symbol:'XEL',name:'Xcel Energy Inc.',sector:'Technology',cap:'large',basePrice:62,currency:'
</body>
</html>
},
  {symbol:'ON',name:'ON Semiconductor Corp.',sector:'Semiconductors',cap:'large',basePrice:72,currency:'
</body>
</html>
},
  {symbol:'CDW',name:'CDW Corporation',sector:'Technology',cap:'large',basePrice:230,currency:'
</body>
</html>
},
  {symbol:'TTWO',name:'Take-Two Interactive Software',sector:'Gaming',cap:'large',basePrice:165,currency:'
</body>
</html>
},
  {symbol:'WBD',name:'Warner Bros. Discovery Inc.',sector:'Media',cap:'large',basePrice:12,currency:'
</body>
</html>
},
  {symbol:'FANG',name:'Diamondback Energy Inc.',sector:'Technology',cap:'large',basePrice:165,currency:'
</body>
</html>
},
  {symbol:'BKR',name:'Baker Hughes Company',sector:'Technology',cap:'large',basePrice:35,currency:'
</body>
</html>
},
  {symbol:'GFS',name:'GlobalFoundries Inc.',sector:'Semiconductors',cap:'large',basePrice:55,currency:'
</body>
</html>
},
  {symbol:'MCHP',name:'Microchip Technology Inc.',sector:'Semiconductors',cap:'large',basePrice:80,currency:'
</body>
</html>
},
  {symbol:'DASH',name:'DoorDash Inc.',sector:'Technology',cap:'large',basePrice:125,currency:'
</body>
</html>
},
  {symbol:'ARM',name:'Arm Holdings PLC',sector:'Semiconductors',cap:'large',basePrice:130,currency:'
</body>
</html>
},
  {symbol:'SMCI',name:'Super Micro Computer Inc.',sector:'Hardware',cap:'large',basePrice:45,currency:'
</body>
</html>
},
  {symbol:'BIIB',name:'Biogen Inc.',sector:'Biotech',cap:'large',basePrice:220,currency:'
</body>
</html>
},
  {symbol:'MRNA',name:'Moderna Inc.',sector:'Biotech',cap:'large',basePrice:105,currency:'
</body>
</html>
},
  {symbol:'HON',name:'Honeywell International Inc.',sector:'Technology',cap:'large',basePrice:200,currency:'
</body>
</html>
},
  {symbol:'DLTR',name:'Dollar Tree Inc.',sector:'Retail',cap:'large',basePrice:135,currency:'
</body>
</html>
},
  {symbol:'ILMN',name:'Illumina Inc.',sector:'Healthcare',cap:'large',basePrice:130,currency:'
</body>
</html>
},
  {symbol:'CHTR',name:'Charter Communications Inc.',sector:'Media',cap:'large',basePrice:380,currency:'
</body>
</html>
},
  {symbol:'MAR',name:'Marriott International Inc.',sector:'Travel',cap:'large',basePrice:240,currency:'
</body>
</html>
},
  {symbol:'AEP',name:'American Electric Power Co.',sector:'Technology',cap:'large',basePrice:88,currency:'
</body>
</html>
},
  {symbol:'CTSH',name:'Cognizant Technology Solutions',sector:'Technology',cap:'large',basePrice:75,currency:'
</body>
</html>
},
  {symbol:'VRTX',name:'Vertex Pharmaceuticals Inc.',sector:'Biotech',cap:'large',basePrice:410,currency:'
</body>
</html>
},
  {symbol:'PDD',name:'PDD Holdings Inc.',sector:'E-Commerce',cap:'large',basePrice:125,currency:'
</body>
</html>
},
  {symbol:'LCID',name:'Lucid Group Inc.',sector:'Auto/EV',cap:'large',basePrice:4,currency:'
</body>
</html>
},
  {symbol:'ASML',name:'ASML Holding NV',sector:'Semiconductors',cap:'large',basePrice:710,currency:'
</body>
</html>
},
  {symbol:'TMUS',name:'T-Mobile US Inc.',sector:'Technology',cap:'large',basePrice:165,currency:'
</body>
</html>
},
  {symbol:'ADI',name:'Analog Devices Inc.',sector:'Semiconductors',cap:'large',basePrice:205,currency:'
</body>
</html>
},
  {symbol:'TXN',name:'Texas Instruments Inc.',sector:'Semiconductors',cap:'large',basePrice:175,currency:'
</body>
</html>
},
  {symbol:'SIRI',name:'Sirius XM Holdings Inc.',sector:'Media',cap:'large',basePrice:4,currency:'
</body>
</html>
},
  {symbol:'MTCH',name:'Match Group Inc.',sector:'Internet',cap:'large',basePrice:38,currency:'
</body>
</html>
},
  {symbol:'MSTR',name:'MicroStrategy Inc.',sector:'Technology',cap:'large',basePrice:480,currency:'
</body>
</html>
},
  {symbol:'ENPH',name:'Enphase Energy Inc.',sector:'Technology',cap:'large',basePrice:120,currency:'
</body>
</html>
},
  {symbol:'WBA',name:'Walgreens Boots Alliance Inc.',sector:'Healthcare',cap:'large',basePrice:22,currency:'
</body>
</html>
},
  {symbol:'ZM',name:'Zoom Video Communications Inc.',sector:'Cloud',cap:'large',basePrice:68,currency:'
</body>
</html>
},
  {symbol:'ALGN',name:'Align Technology Inc.',sector:'Healthcare',cap:'large',basePrice:280,currency:'
</body>
</html>
},
  // === MID CAP (50 stocks) — NASDAQ Mid-Caps ($10B-$50B) ===
  {symbol:'SNOW',name:'Snowflake Inc.',sector:'Cloud',cap:'mid',basePrice:165,currency:'
</body>
</html>
},
  {symbol:'TTD',name:'The Trade Desk Inc.',sector:'AdTech',cap:'mid',basePrice:85,currency:'
</body>
</html>
},
  {symbol:'NET',name:'Cloudflare Inc.',sector:'Cloud',cap:'mid',basePrice:95,currency:'
</body>
</html>
},
  {symbol:'OKTA',name:'Okta Inc.',sector:'Cybersecurity',cap:'mid',basePrice:105,currency:'
</body>
</html>
},
  {symbol:'HUBS',name:'HubSpot Inc.',sector:'Software',cap:'mid',basePrice:580,currency:'
</body>
</html>
},
  {symbol:'MDB',name:'MongoDB Inc.',sector:'Cloud',cap:'mid',basePrice:280,currency:'
</body>
</html>
},
  {symbol:'COIN',name:'Coinbase Global Inc.',sector:'Fintech',cap:'mid',basePrice:220,currency:'
</body>
</html>
},
  {symbol:'ROKU',name:'Roku Inc.',sector:'Entertainment',cap:'mid',basePrice:65,currency:'
</body>
</html>
},
  {symbol:'DKNG',name:'DraftKings Inc.',sector:'Gaming',cap:'mid',basePrice:38,currency:'
</body>
</html>
},
  {symbol:'RIVN',name:'Rivian Automotive Inc.',sector:'Auto/EV',cap:'mid',basePrice:14,currency:'
</body>
</html>
},
  {symbol:'MNDY',name:'Monday.com Ltd.',sector:'Software',cap:'mid',basePrice:250,currency:'
</body>
</html>
},
  {symbol:'BILL',name:'BILL Holdings Inc.',sector:'Fintech',cap:'mid',basePrice:72,currency:'
</body>
</html>
},
  {symbol:'CELH',name:'Celsius Holdings Inc.',sector:'Consumer',cap:'mid',basePrice:55,currency:'
</body>
</html>
},
  {symbol:'PATH',name:'UiPath Inc.',sector:'Software',cap:'mid',basePrice:15,currency:'
</body>
</html>
},
  {symbol:'CRSP',name:'CRISPR Therapeutics AG',sector:'Biotech',cap:'mid',basePrice:55,currency:'
</body>
</html>
},
  {symbol:'TWLO',name:'Twilio Inc.',sector:'Cloud',cap:'mid',basePrice:65,currency:'
</body>
</html>
},
  {symbol:'PINS',name:'Pinterest Inc.',sector:'Internet',cap:'mid',basePrice:35,currency:'
</body>
</html>
},
  {symbol:'LYFT',name:'Lyft Inc.',sector:'Ride-hailing',cap:'mid',basePrice:18,currency:'
</body>
</html>
},
  {symbol:'RBLX',name:'Roblox Corporation',sector:'Gaming',cap:'mid',basePrice:42,currency:'
</body>
</html>
},
  {symbol:'ETSY',name:'Etsy Inc.',sector:'E-Commerce',cap:'mid',basePrice:75,currency:'
</body>
</html>
},
  {symbol:'ZI',name:'ZoomInfo Technologies Inc.',sector:'Software',cap:'mid',basePrice:20,currency:'
</body>
</html>
},
  {symbol:'SPLK',name:'Splunk Inc.',sector:'Software',cap:'mid',basePrice:155,currency:'
</body>
</html>
},
  {symbol:'DOCN',name:'DigitalOcean Holdings Inc.',sector:'Cloud',cap:'mid',basePrice:35,currency:'
</body>
</html>
},
  {symbol:'CFLT',name:'Confluent Inc.',sector:'Cloud',cap:'mid',basePrice:28,currency:'
</body>
</html>
},
  {symbol:'GTLB',name:'GitLab Inc.',sector:'Software',cap:'mid',basePrice:55,currency:'
</body>
</html>
},
  {symbol:'PCOR',name:'Procore Technologies Inc.',sector:'Software',cap:'mid',basePrice:68,currency:'
</body>
</html>
},
  {symbol:'VEEV',name:'Veeva Systems Inc.',sector:'Cloud',cap:'mid',basePrice:195,currency:'
</body>
</html>
},
  {symbol:'TOST',name:'Toast Inc.',sector:'Fintech',cap:'mid',basePrice:25,currency:'
</body>
</html>
},
  {symbol:'NTNX',name:'Nutanix Inc.',sector:'Cloud',cap:'mid',basePrice:55,currency:'
</body>
</html>
},
  {symbol:'ESTC',name:'Elastic NV',sector:'Software',cap:'mid',basePrice:110,currency:'
</body>
</html>
},
  {symbol:'CYBR',name:'CyberArk Software Ltd.',sector:'Cybersecurity',cap:'mid',basePrice:240,currency:'
</body>
</html>
},
  {symbol:'PAYC',name:'Paycom Software Inc.',sector:'Software',cap:'mid',basePrice:195,currency:'
</body>
</html>
},
  {symbol:'PCTY',name:'Paylocity Holding Corp.',sector:'Software',cap:'mid',basePrice:165,currency:'
</body>
</html>
},
  {symbol:'ENSG',name:'Ensign Group Inc.',sector:'Healthcare',cap:'mid',basePrice:115,currency:'
</body>
</html>
},
  {symbol:'EXAS',name:'Exact Sciences Corporation',sector:'Healthcare',cap:'mid',basePrice:72,currency:'
</body>
</html>
},
  {symbol:'MANH',name:'Manhattan Associates Inc.',sector:'Software',cap:'mid',basePrice:220,currency:'
</body>
</html>
},
  {symbol:'TYL',name:'Tyler Technologies Inc.',sector:'Software',cap:'mid',basePrice:450,currency:'
</body>
</html>
},
  {symbol:'FIVE',name:'Five Below Inc.',sector:'Retail',cap:'mid',basePrice:145,currency:'
</body>
</html>
},
  {symbol:'CHWY',name:'Chewy Inc.',sector:'E-Commerce',cap:'mid',basePrice:28,currency:'
</body>
</html>
},
  {symbol:'SMAR',name:'Smartsheet Inc.',sector:'Software',cap:'mid',basePrice:48,currency:'
</body>
</html>
},
  {symbol:'QLYS',name:'Qualys Inc.',sector:'Cybersecurity',cap:'mid',basePrice:155,currency:'
</body>
</html>
},
  {symbol:'TRMB',name:'Trimble Inc.',sector:'Technology',cap:'mid',basePrice:58,currency:'
</body>
</html>
},
  {symbol:'WIX',name:'Wix.com Ltd.',sector:'Internet',cap:'mid',basePrice:145,currency:'
</body>
</html>
},
  {symbol:'PODD',name:'Insulet Corporation',sector:'Healthcare',cap:'mid',basePrice:175,currency:'
</body>
</html>
},
  {symbol:'FLEX',name:'Flex Ltd.',sector:'Hardware',cap:'mid',basePrice:28,currency:'
</body>
</html>
},
  {symbol:'SWAV',name:'Shockwave Medical Inc.',sector:'Healthcare',cap:'mid',basePrice:330,currency:'
</body>
</html>
},
  {symbol:'LSCC',name:'Lattice Semiconductor Corp.',sector:'Semiconductors',cap:'mid',basePrice:72,currency:'
</body>
</html>
},
  {symbol:'GLOB',name:'Globant S.A.',sector:'Technology',cap:'mid',basePrice:195,currency:'
</body>
</html>
},
  {symbol:'AZPN',name:'Aspen Technology Inc.',sector:'Software',cap:'mid',basePrice:210,currency:'
</body>
</html>
},
  {symbol:'FRSH',name:'Freshworks Inc.',sector:'Software',cap:'mid',basePrice:18,currency:'
</body>
</html>
},
  // === SMALL CAP (50 stocks) — NASDAQ Small-Caps (< $10B) ===
  {symbol:'IONQ',name:'IonQ Inc.',sector:'Quantum Computing',cap:'small',basePrice:18,currency:'
</body>
</html>
},
  {symbol:'RKLB',name:'Rocket Lab USA Inc.',sector:'Aerospace',cap:'small',basePrice:22,currency:'
</body>
</html>
},
  {symbol:'SOUN',name:'SoundHound AI Inc.',sector:'AI',cap:'small',basePrice:8,currency:'
</body>
</html>
},
  {symbol:'JOBY',name:'Joby Aviation Inc.',sector:'Aerospace',cap:'small',basePrice:6.5,currency:'
</body>
</html>
},
  {symbol:'DNA',name:'Ginkgo Bioworks Holdings Inc.',sector:'Biotech',cap:'small',basePrice:12,currency:'
</body>
</html>
},
  {symbol:'PLTR',name:'Palantir Technologies Inc.',sector:'AI',cap:'small',basePrice:24,currency:'
</body>
</html>
},
  {symbol:'SOFI',name:'SoFi Technologies Inc.',sector:'Fintech',cap:'small',basePrice:9,currency:'
</body>
</html>
},
  {symbol:'GRAB',name:'Grab Holdings Ltd.',sector:'Ride-hailing',cap:'small',basePrice:3.8,currency:'
</body>
</html>
},
  {symbol:'HOOD',name:'Robinhood Markets Inc.',sector:'Fintech',cap:'small',basePrice:18,currency:'
</body>
</html>
},
  {symbol:'AFRM',name:'Affirm Holdings Inc.',sector:'Fintech',cap:'small',basePrice:42,currency:'
</body>
</html>
},
  {symbol:'UPST',name:'Upstart Holdings Inc.',sector:'Fintech',cap:'small',basePrice:28,currency:'
</body>
</html>
},
  {symbol:'U',name:'Unity Software Inc.',sector:'Gaming',cap:'small',basePrice:22,currency:'
</body>
</html>
},
  {symbol:'RDDT',name:'Reddit Inc.',sector:'Internet',cap:'small',basePrice:55,currency:'
</body>
</html>
},
  {symbol:'DUOL',name:'Duolingo Inc.',sector:'EdTech',cap:'small',basePrice:220,currency:'
</body>
</html>
},
  {symbol:'APP',name:'AppLovin Corporation',sector:'AdTech',cap:'small',basePrice:85,currency:'
</body>
</html>
},
  {symbol:'CAVA',name:'CAVA Group Inc.',sector:'QSR',cap:'small',basePrice:75,currency:'
</body>
</html>
},
  {symbol:'BMBL',name:'Bumble Inc.',sector:'Internet',cap:'small',basePrice:15,currency:'
</body>
</html>
},
  {symbol:'SKLZ',name:'Skillz Inc.',sector:'Gaming',cap:'small',basePrice:7,currency:'
</body>
</html>
},
  {symbol:'OPEN',name:'Opendoor Technologies Inc.',sector:'Technology',cap:'small',basePrice:3.5,currency:'
</body>
</html>
},
  {symbol:'ASAN',name:'Asana Inc.',sector:'Software',cap:'small',basePrice:18,currency:'
</body>
</html>
},
  {symbol:'GDRX',name:'GoodRx Holdings Inc.',sector:'Healthcare',cap:'small',basePrice:7,currency:'
</body>
</html>
},
  {symbol:'BIGC',name:'BigCommerce Holdings Inc.',sector:'E-Commerce',cap:'small',basePrice:8,currency:'
</body>
</html>
},
  {symbol:'WKHS',name:'Workhorse Group Inc.',sector:'Auto/EV',cap:'small',basePrice:1.2,currency:'
</body>
</html>
},
  {symbol:'LAZR',name:'Luminar Technologies Inc.',sector:'Auto/EV',cap:'small',basePrice:4,currency:'
</body>
</html>
},
  {symbol:'VLD',name:'Velo3D Inc.',sector:'Technology',cap:'small',basePrice:2.5,currency:'
</body>
</html>
},
  {symbol:'MAPS',name:'WM Technology Inc.',sector:'Technology',cap:'small',basePrice:1.8,currency:'
</body>
</html>
},
  {symbol:'SEAT',name:'Vivid Seats Inc.',sector:'Entertainment',cap:'small',basePrice:6,currency:'
</body>
</html>
},
  {symbol:'BRZE',name:'Braze Inc.',sector:'Software',cap:'small',basePrice:45,currency:'
</body>
</html>
},
  {symbol:'NNOX',name:'Nano-X Imaging Ltd.',sector:'Healthcare',cap:'small',basePrice:12,currency:'
</body>
</html>
},
  {symbol:'QBTS',name:'D-Wave Quantum Inc.',sector:'Quantum Computing',cap:'small',basePrice:3,currency:'
</body>
</html>
},
  {symbol:'RGTI',name:'Rigetti Computing Inc.',sector:'Quantum Computing',cap:'small',basePrice:2,currency:'
</body>
</html>
},
  {symbol:'ARQT',name:'Arcus Biosciences Inc.',sector:'Biotech',cap:'small',basePrice:18,currency:'
</body>
</html>
},
  {symbol:'CIFR',name:'Cipher Mining Inc.',sector:'Technology',cap:'small',basePrice:5,currency:'
</body>
</html>
},
  {symbol:'ASTS',name:'AST SpaceMobile Inc.',sector:'Aerospace',cap:'small',basePrice:15,currency:'
</body>
</html>
},
  {symbol:'LUNR',name:'Intuitive Machines Inc.',sector:'Aerospace',cap:'small',basePrice:8,currency:'
</body>
</html>
},
  {symbol:'RDW',name:'Redwire Corporation',sector:'Aerospace',cap:'small',basePrice:6,currency:'
</body>
</html>
},
  {symbol:'SMWB',name:'Similarweb Ltd.',sector:'Software',cap:'small',basePrice:10,currency:'
</body>
</html>
},
  {symbol:'TASK',name:'TaskUs Inc.',sector:'Technology',cap:'small',basePrice:14,currency:'
</body>
</html>
},
  {symbol:'DLO',name:'DLocal Ltd.',sector:'Fintech',cap:'small',basePrice:12,currency:'
</body>
</html>
},
  {symbol:'VERX',name:'Vertex Inc.',sector:'Software',cap:'small',basePrice:25,currency:'
</body>
</html>
},
  {symbol:'CWAN',name:'Clearwater Analytics Holdings',sector:'Fintech',cap:'small',basePrice:20,currency:'
</body>
</html>
},
  {symbol:'RELY',name:'Remitly Global Inc.',sector:'Fintech',cap:'small',basePrice:18,currency:'
</body>
</html>
},
  {symbol:'KARO',name:'Karooooo Ltd.',sector:'Technology',cap:'small',basePrice:35,currency:'
</body>
</html>
},
  {symbol:'BLZE',name:'Backblaze Inc.',sector:'Cloud',cap:'small',basePrice:9,currency:'
</body>
</html>
},
  {symbol:'PRCT',name:'PROCEPT BioRobotics Corp.',sector:'Healthcare',cap:'small',basePrice:55,currency:'
</body>
</html>
},
  {symbol:'AEHR',name:'Aehr Test Systems',sector:'Semiconductors',cap:'small',basePrice:18,currency:'
</body>
</html>
},
  {symbol:'VERV',name:'Verve Therapeutics Inc.',sector:'Biotech',cap:'small',basePrice:8,currency:'
</body>
</html>
},
  {symbol:'MGNI',name:'Magnite Inc.',sector:'AdTech',cap:'small',basePrice:12,currency:'
</body>
</html>
},
  {symbol:'INDI',name:'Indie Semiconductor Inc.',sector:'Semiconductors',cap:'small',basePrice:7,currency:'
</body>
</html>
},
  {symbol:'BTDR',name:'Bitdeer Technologies Group',sector:'Technology',cap:'small',basePrice:10,currency:'
</body>
</html>
}
];


const EXCHANGE_MAP = {nse: NSE_STOCKS, bse: BSE_STOCKS, nasdaq: NASDAQ_STOCKS};

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
function genPrices(stock,days){const rng=seededRng(hash(stock.symbol+stock.sector+days));const prices=[];let p=stock.basePrice;const vol=stock.basePrice*0.018,trend=(rng()-0.45)*0.0025;for(let i=0;i<days;i++){p=Math.max(p*0.6,p+(rng()-0.5)*vol+trend*p);prices.push(+p.toFixed(2));}return prices;}
function genDates(days){const d=[];const now=new Date();for(let i=days-1;i>=0;i--){const dt=new Date(now);dt.setDate(dt.getDate()-i);if(dt.getDay()!==0&&dt.getDay()!==6)d.push(dt);}return d;}
function getCurr(e){return e==='nasdaq'?'
</body>
</html>
:'₹';}
function fmtP(p,e){return e==='nasdaq'?`${p.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`:`₹${p.toLocaleString('en-IN')}`;}
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

// Gap 1: Synthetic volume generation and confirmation
function genVolume(stock,days){
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
    if(stock.currency==='
</body>
</html>
)revB*=5;
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
updateSectorDropdown();
renderSummary();

