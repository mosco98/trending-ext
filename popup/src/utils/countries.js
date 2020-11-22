const countries = [
  {
    data: { data: { place_id: '-7293673535050703919', name: 'Afghanistan', location_type: 'Country' } },
    id: '-7293673535050703919'
  },
  {
    data: { data: { place_id: '-9045592582561573978', name: 'Albania', location_type: 'Country' } },
    id: '-9045592582561573978'
  },
  {
    data: { data: { place_id: '-2938771511404889033', name: 'Algeria', location_type: 'Country' } },
    id: '-2938771511404889033'
  },
  {
    data: { data: { place_id: '743599677272621062', name: 'Andorra', location_type: 'Country' } },
    id: '743599677272621062'
  },
  {
    data: { data: { place_id: '-1769440319492945944', name: 'Angola', location_type: 'Country' } },
    id: '-1769440319492945944'
  },
  {
    data: { data: { place_id: '-1160361085460917568', name: 'Anguilla', location_type: 'Country' } },
    id: '-1160361085460917568'
  },
  {
    data: { data: { place_id: '-2237043463820159213', name: 'Antigua & Barbuda', location_type: 'Country' } },
    id: '-2237043463820159213'
  },
  {
    data: { data: { place_id: '5565096121164180265', name: 'Argentina', location_type: 'Country' } },
    id: '5565096121164180265'
  },
  {
    data: { data: { place_id: '1375208561800189201', name: 'Armenia', location_type: 'Country' } },
    id: '1375208561800189201'
  },
  {
    data: { data: { place_id: '-430280310364900000', name: 'Aruba', location_type: 'Country' } },
    id: '-430280310364900000'
  },
  {
    data: { data: { place_id: '4545484598816818534', name: 'Australia', location_type: 'Country' } },
    id: '4545484598816818534'
  },
  {
    data: { data: { place_id: '3477066258611901349', name: 'Austria', location_type: 'Country' } },
    id: '3477066258611901349'
  },
  {
    data: { data: { place_id: '-1170306075043712920', name: 'Azerbaijan', location_type: 'Country' } },
    id: '-1170306075043712920'
  },
  {
    data: { data: { place_id: '-5318395481016932348', name: 'Bahamas', location_type: 'Country' } },
    id: '-5318395481016932348'
  },
  {
    data: { data: { place_id: '-2023869573786658976', name: 'Bahrain', location_type: 'Country' } },
    id: '-2023869573786658976'
  },
  {
    data: { data: { place_id: '-6967522436594057822', name: 'Bangladesh', location_type: 'Country' } },
    id: '-6967522436594057822'
  },
  {
    data: { data: { place_id: '-9155491748189484602', name: 'Barbados', location_type: 'Country' } },
    id: '-9155491748189484602'
  },
  {
    data: { data: { place_id: '3691359678223139275', name: 'Belarus', location_type: 'Country' } },
    id: '3691359678223139275'
  },
  {
    data: { data: { place_id: '8700865690535483778', name: 'Belgium', location_type: 'Country' } },
    id: '8700865690535483778'
  },
  {
    data: { data: { place_id: '2791022595611571606', name: 'Belize', location_type: 'Country' } },
    id: '2791022595611571606'
  },
  {
    data: { data: { place_id: '-1259677430686915302', name: 'Benin', location_type: 'Country' } },
    id: '-1259677430686915302'
  },
  {
    data: { data: { place_id: '3893786109402108147', name: 'Bermuda', location_type: 'Country' } },
    id: '3893786109402108147'
  },
  {
    data: { data: { place_id: '4209574196607360541', name: 'Bhutan', location_type: 'Country' } },
    id: '4209574196607360541'
  },
  {
    data: { data: { place_id: '-4309364909308499657', name: 'Bolivia', location_type: 'Country' } },
    id: '-4309364909308499657'
  },
  {
    data: { data: { place_id: '9063907876614026187', name: 'Bosnia & Herzegovina', location_type: 'Country' } },
    id: '9063907876614026187'
  },
  {
    data: { data: { place_id: '-8461566126974688943', name: 'Botswana', location_type: 'Country' } },
    id: '-8461566126974688943'
  },
  {
    data: { data: { place_id: '1950197124717128353', name: 'Brazil', location_type: 'Country' } },
    id: '1950197124717128353'
  },
  {
    data: { data: { place_id: '-5465664106076009166', name: 'Brunei', location_type: 'Country' } },
    id: '-5465664106076009166'
  },
  {
    data: { data: { place_id: '2229589948699602369', name: 'Bulgaria', location_type: 'Country' } },
    id: '2229589948699602369'
  },
  {
    data: { data: { place_id: '340662981867412385', name: 'Burkina Faso', location_type: 'Country' } },
    id: '340662981867412385'
  },
  {
    data: { data: { place_id: '7099637315852315309', name: 'Burundi', location_type: 'Country' } },
    id: '7099637315852315309'
  },
  {
    data: { data: { place_id: '-2357027917693525215', name: 'Cambodia', location_type: 'Country' } },
    id: '-2357027917693525215'
  },
  {
    data: { data: { place_id: '-7508983313380116358', name: 'Cameroon', location_type: 'Country' } },
    id: '-7508983313380116358'
  },
  {
    data: { data: { place_id: '3708319748991051719', name: 'Canada', location_type: 'Country' } },
    id: '3708319748991051719'
  },
  {
    data: { data: { place_id: '-3708312612760302156', name: 'Cayman Islands', location_type: 'Country' } },
    id: '-3708312612760302156'
  },
  {
    data: { data: { place_id: '5162197366559151326', name: 'Chile', location_type: 'Country' } },
    id: '5162197366559151326'
  },
  {
    data: { data: { place_id: '5158716471917353665', name: 'China', location_type: 'Country' } },
    id: '5158716471917353665'
  },
  {
    data: { data: { place_id: '448449062339483107', name: 'Colombia', location_type: 'Country' } },
    id: '448449062339483107'
  },
  {
    data: { data: { place_id: '3631718698342347360', name: 'Congo - Brazzaville', location_type: 'Country' } },
    id: '3631718698342347360'
  },
  {
    data: { data: { place_id: '1715201550013437228', name: 'Congo - Kinshasa', location_type: 'Country' } },
    id: '1715201550013437228'
  },
  {
    data: { data: { place_id: '-1995519297083816975', name: 'Costa Rica', location_type: 'Country' } },
    id: '-1995519297083816975'
  },
  {
    data: { data: { place_id: '-8258096058736955903', name: 'Croatia', location_type: 'Country' } },
    id: '-8258096058736955903'
  },
  {
    data: { data: { place_id: '-6041934125474970508', name: 'Cuba', location_type: 'Country' } },
    id: '-6041934125474970508'
  },
  {
    data: { data: { place_id: '-5712842409059029953', name: 'Curaçao', location_type: 'Country' } },
    id: '-5712842409059029953'
  },
  {
    data: { data: { place_id: '-1103643344238824332', name: 'Cyprus', location_type: 'Country' } },
    id: '-1103643344238824332'
  },
  {
    data: { data: { place_id: '7736400604048538601', name: 'Czechia', location_type: 'Country' } },
    id: '7736400604048538601'
  },
  {
    data: { data: { place_id: '9082413900497821042', name: 'Côte d’Ivoire', location_type: 'Country' } },
    id: '9082413900497821042'
  },
  {
    data: { data: { place_id: '-4424729568631920893', name: 'Denmark', location_type: 'Country' } },
    id: '-4424729568631920893'
  },
  {
    data: { data: { place_id: '-423887338869957627', name: 'Djibouti', location_type: 'Country' } },
    id: '-423887338869957627'
  },
  {
    data: { data: { place_id: '-7818918844500003237', name: 'Dominica', location_type: 'Country' } },
    id: '-7818918844500003237'
  },
  {
    data: { data: { place_id: '7592882117996063095', name: 'Dominican Republic', location_type: 'Country' } },
    id: '7592882117996063095'
  },
  {
    data: { data: { place_id: '5639574119361710880', name: 'Ecuador', location_type: 'Country' } },
    id: '5639574119361710880'
  },
  {
    data: { data: { place_id: '-4154065666575264154', name: 'Egypt', location_type: 'Country' } },
    id: '-4154065666575264154'
  },
  {
    data: { data: { place_id: '4881745937578809202', name: 'El Salvador', location_type: 'Country' } },
    id: '4881745937578809202'
  },
  {
    data: { data: { place_id: '-2152060852187384679', name: 'Estonia', location_type: 'Country' } },
    id: '-2152060852187384679'
  },
  {
    data: { data: { place_id: '149318359618127277', name: 'Eswatini', location_type: 'Country' } },
    id: '149318359618127277'
  },
  {
    data: { data: { place_id: '-4343619646806415630', name: 'Ethiopia', location_type: 'Country' } },
    id: '-4343619646806415630'
  },
  {
    data: { data: { place_id: '6565196088673120814', name: 'Faroe Islands', location_type: 'Country' } },
    id: '6565196088673120814'
  },
  {
    data: { data: { place_id: '3371664734331923381', name: 'Fiji', location_type: 'Country' } },
    id: '3371664734331923381'
  },
  {
    data: { data: { place_id: '-1744726079396219878', name: 'Finland', location_type: 'Country' } },
    id: '-1744726079396219878'
  },
  {
    data: { data: { place_id: '-882767250859714689', name: 'France', location_type: 'Country' } },
    id: '-882767250859714689'
  },
  {
    data: { data: { place_id: '-7414258398209583840', name: 'French Guiana', location_type: 'Country' } },
    id: '-7414258398209583840'
  },
  {
    data: { data: { place_id: '-1558586224220318393', name: 'French Polynesia', location_type: 'Country' } },
    id: '-1558586224220318393'
  },
  {
    data: { data: { place_id: '1915415757062909959', name: 'Gabon', location_type: 'Country' } },
    id: '1915415757062909959'
  },
  {
    data: { data: { place_id: '6482869029120607708', name: 'Gambia', location_type: 'Country' } },
    id: '6482869029120607708'
  },
  {
    data: { data: { place_id: '6988662542809310173', name: 'Georgia', location_type: 'Country' } },
    id: '6988662542809310173'
  },
  {
    data: { data: { place_id: '-158432913530051802', name: 'Germany', location_type: 'Country' } },
    id: '-158432913530051802'
  },
  {
    data: { data: { place_id: '-4571337146556827642', name: 'Ghana', location_type: 'Country' } },
    id: '-4571337146556827642'
  },
  {
    data: { data: { place_id: '3546312160744466302', name: 'Gibraltar', location_type: 'Country' } },
    id: '3546312160744466302'
  },
  {
    data: { data: { place_id: '3379932461505701466', name: 'Greece', location_type: 'Country' } },
    id: '3379932461505701466'
  },
  {
    data: { data: { place_id: '-5036316668942433223', name: 'Grenada', location_type: 'Country' } },
    id: '-5036316668942433223'
  },
  {
    data: { data: { place_id: '5664313941613028162', name: 'Guadeloupe', location_type: 'Country' } },
    id: '5664313941613028162'
  },
  {
    data: { data: { place_id: '1428900783041051011', name: 'Guatemala', location_type: 'Country' } },
    id: '1428900783041051011'
  },
  {
    data: { data: { place_id: '-9025016756509220725', name: 'Guernsey', location_type: 'Country' } },
    id: '-9025016756509220725'
  },
  {
    data: { data: { place_id: '3260286530590240132', name: 'Guinea', location_type: 'Country' } },
    id: '3260286530590240132'
  },
  {
    data: { data: { place_id: '2528853838713364218', name: 'Guyana', location_type: 'Country' } },
    id: '2528853838713364218'
  },
  {
    data: { data: { place_id: '-3178935737528792344', name: 'Haiti', location_type: 'Country' } },
    id: '-3178935737528792344'
  },
  {
    data: { data: { place_id: '-2854527981066739038', name: 'Honduras', location_type: 'Country' } },
    id: '-2854527981066739038'
  },
  {
    data: { data: { place_id: '3890366451382798053', name: 'Hong Kong SAR China', location_type: 'Country' } },
    id: '3890366451382798053'
  },
  {
    data: { data: { place_id: '-9099280338087611406', name: 'Hungary', location_type: 'Country' } },
    id: '-9099280338087611406'
  },
  {
    data: { data: { place_id: '-4354086671909508730', name: 'Iceland', location_type: 'Country' } },
    id: '-4354086671909508730'
  },
  {
    data: { data: { place_id: '-5165415742961667872', name: 'India', location_type: 'Country' } },
    id: '-5165415742961667872'
  },
  {
    data: { data: { place_id: '-3568670787064367969', name: 'Indonesia', location_type: 'Country' } },
    id: '-3568670787064367969'
  },
  {
    data: { data: { place_id: '2820826012199272570', name: 'Iran', location_type: 'Country' } },
    id: '2820826012199272570'
  },
  {
    data: { data: { place_id: '-5319640165985647807', name: 'Iraq', location_type: 'Country' } },
    id: '-5319640165985647807'
  },
  {
    data: { data: { place_id: '-1556106695608941113', name: 'Ireland', location_type: 'Country' } },
    id: '-1556106695608941113'
  },
  {
    data: { data: { place_id: '-6883216868411536344', name: 'Isle of Man', location_type: 'Country' } },
    id: '-6883216868411536344'
  },
  {
    data: { data: { place_id: '3376413446669583689', name: 'Israel', location_type: 'Country' } },
    id: '3376413446669583689'
  },
  {
    data: { data: { place_id: '-4063967790046936818', name: 'Italy', location_type: 'Country' } },
    id: '-4063967790046936818'
  },
  {
    data: { data: { place_id: '-2995833801110313328', name: 'Jamaica', location_type: 'Country' } },
    id: '-2995833801110313328'
  },
  {
    data: { data: { place_id: '499763682993518708', name: 'Japan', location_type: 'Country' } },
    id: '499763682993518708'
  },
  {
    data: { data: { place_id: '6731622963572903665', name: 'Jersey', location_type: 'Country' } },
    id: '6731622963572903665'
  },
  {
    data: { data: { place_id: '-260501929978120120', name: 'Jordan', location_type: 'Country' } },
    id: '-260501929978120120'
  },
  {
    data: { data: { place_id: '7886830539620298863', name: 'Kazakhstan', location_type: 'Country' } },
    id: '7886830539620298863'
  },
  {
    data: { data: { place_id: '1706136829559624331', name: 'Kenya', location_type: 'Country' } },
    id: '1706136829559624331'
  },
  {
    data: { data: { place_id: '-3565714688918849841', name: 'Kosovo', location_type: 'Country' } },
    id: '-3565714688918849841'
  },
  {
    data: { data: { place_id: '-3241657007340602969', name: 'Kuwait', location_type: 'Country' } },
    id: '-3241657007340602969'
  },
  {
    data: { data: { place_id: '6245518186887154228', name: 'Kyrgyzstan', location_type: 'Country' } },
    id: '6245518186887154228'
  },
  {
    data: { data: { place_id: '576175166268805312', name: 'Laos', location_type: 'Country' } },
    id: '576175166268805312'
  },
  {
    data: { data: { place_id: '-3393951702141831559', name: 'Latvia', location_type: 'Country' } },
    id: '-3393951702141831559'
  },
  {
    data: { data: { place_id: '6357909739404339665', name: 'Lebanon', location_type: 'Country' } },
    id: '6357909739404339665'
  },
  {
    data: { data: { place_id: '1329600696892087525', name: 'Lesotho', location_type: 'Country' } },
    id: '1329600696892087525'
  },
  {
    data: { data: { place_id: '-8273494238356547244', name: 'Liberia', location_type: 'Country' } },
    id: '-8273494238356547244'
  },
  {
    data: { data: { place_id: '8098456589879480009', name: 'Libya', location_type: 'Country' } },
    id: '8098456589879480009'
  },
  {
    data: { data: { place_id: '-3040522531850260588', name: 'Lithuania', location_type: 'Country' } },
    id: '-3040522531850260588'
  },
  {
    data: { data: { place_id: '-6227762027206193274', name: 'Luxembourg', location_type: 'Country' } },
    id: '-6227762027206193274'
  },
  {
    data: { data: { place_id: '-3446980163932502858', name: 'Macao SAR China', location_type: 'Country' } },
    id: '-3446980163932502858'
  },
  {
    data: { data: { place_id: '3105382184688887878', name: 'Madagascar', location_type: 'Country' } },
    id: '3105382184688887878'
  },
  {
    data: { data: { place_id: '-6892694798387986661', name: 'Malawi', location_type: 'Country' } },
    id: '-6892694798387986661'
  },
  {
    data: { data: { place_id: '-8776409192903084900', name: 'Malaysia', location_type: 'Country' } },
    id: '-8776409192903084900'
  },
  {
    data: { data: { place_id: '3197919857562115705', name: 'Maldives', location_type: 'Country' } },
    id: '3197919857562115705'
  },
  {
    data: { data: { place_id: '4959378345312594742', name: 'Mali', location_type: 'Country' } },
    id: '4959378345312594742'
  },
  {
    data: { data: { place_id: '2126625774811579615', name: 'Malta', location_type: 'Country' } },
    id: '2126625774811579615'
  },
  {
    data: { data: { place_id: '1566651795969239902', name: 'Martinique', location_type: 'Country' } },
    id: '1566651795969239902'
  },
  {
    data: { data: { place_id: '3657120917728997197', name: 'Mauritania', location_type: 'Country' } },
    id: '3657120917728997197'
  },
  {
    data: { data: { place_id: '-1252676712967540832', name: 'Mauritius', location_type: 'Country' } },
    id: '-1252676712967540832'
  },
  {
    data: { data: { place_id: '2689506185291075782', name: 'Mexico', location_type: 'Country' } },
    id: '2689506185291075782'
  },
  {
    data: { data: { place_id: '-6297278685792898026', name: 'Moldova', location_type: 'Country' } },
    id: '-6297278685792898026'
  },
  {
    data: { data: { place_id: '7825301456499146803', name: 'Monaco', location_type: 'Country' } },
    id: '7825301456499146803'
  },
  {
    data: { data: { place_id: '-8370475160547924947', name: 'Mongolia', location_type: 'Country' } },
    id: '-8370475160547924947'
  },
  {
    data: { data: { place_id: '-3940527704975126205', name: 'Montenegro', location_type: 'Country' } },
    id: '-3940527704975126205'
  },
  {
    data: { data: { place_id: '-5333313881682429798', name: 'Morocco', location_type: 'Country' } },
    id: '-5333313881682429798'
  },
  {
    data: { data: { place_id: '-5310355465789181635', name: 'Mozambique', location_type: 'Country' } },
    id: '-5310355465789181635'
  },
  {
    data: { data: { place_id: '8529328623192576872', name: 'Myanmar (Burma)', location_type: 'Country' } },
    id: '8529328623192576872'
  },
  {
    data: { data: { place_id: '4464443432617265162', name: 'Namibia', location_type: 'Country' } },
    id: '4464443432617265162'
  },
  {
    data: { data: { place_id: '-1021290998162208791', name: 'Nepal', location_type: 'Country' } },
    id: '-1021290998162208791'
  },
  {
    data: { data: { place_id: '-8674639883747605872', name: 'Netherlands', location_type: 'Country' } },
    id: '-8674639883747605872'
  },
  {
    data: { data: { place_id: '793650451909123257', name: 'New Zealand', location_type: 'Country' } },
    id: '793650451909123257'
  },
  {
    data: { data: { place_id: '-3269407399549159388', name: 'Nicaragua', location_type: 'Country' } },
    id: '-3269407399549159388'
  },
  {
    data: { data: { place_id: '-3027553563816410612', name: 'Niger', location_type: 'Country' } },
    id: '-3027553563816410612'
  },
  {
    data: { data: { place_id: '6463355099376608651', name: 'Nigeria', location_type: 'Country' } },
    id: '6463355099376608651'
  },
  {
    data: { data: { place_id: '-7532128339457212856', name: 'North Macedonia', location_type: 'Country' } },
    id: '-7532128339457212856'
  },
  {
    data: { data: { place_id: '-917945435372614965', name: 'Northern Mariana Islands', location_type: 'Country' } },
    id: '-917945435372614965'
  },
  {
    data: { data: { place_id: '930197452956643198', name: 'Norway', location_type: 'Country' } },
    id: '930197452956643198'
  },
  {
    data: { data: { place_id: '-1432840641003940880', name: 'Oman', location_type: 'Country' } },
    id: '-1432840641003940880'
  },
  {
    data: { data: { place_id: '7250935481943878042', name: 'Pakistan', location_type: 'Country' } },
    id: '7250935481943878042'
  },
  {
    data: { data: { place_id: '-7094606814196399254', name: 'Panama', location_type: 'Country' } },
    id: '-7094606814196399254'
  },
  {
    data: { data: { place_id: '-8805902802589351710', name: 'Papua New Guinea', location_type: 'Country' } },
    id: '-8805902802589351710'
  },
  {
    data: { data: { place_id: '7850615692039760380', name: 'Paraguay', location_type: 'Country' } },
    id: '7850615692039760380'
  },
  {
    data: { data: { place_id: '3313135070624720100', name: 'Peru', location_type: 'Country' } },
    id: '3313135070624720100'
  },
  {
    data: { data: { place_id: '-354342964243026931', name: 'Philippines', location_type: 'Country' } },
    id: '-354342964243026931'
  },
  {
    data: { data: { place_id: '-2808195226817565729', name: 'Poland', location_type: 'Country' } },
    id: '-2808195226817565729'
  },
  {
    data: { data: { place_id: '-9108274811673285316', name: 'Portugal', location_type: 'Country' } },
    id: '-9108274811673285316'
  },
  {
    data: { data: { place_id: '-6535811615842162329', name: 'Qatar', location_type: 'Country' } },
    id: '-6535811615842162329'
  },
  {
    data: { data: { place_id: '-625131485298729454', name: 'Romania', location_type: 'Country' } },
    id: '-625131485298729454'
  },
  {
    data: { data: { place_id: '6274701892295617822', name: 'Russia', location_type: 'Country' } },
    id: '6274701892295617822'
  },
  {
    data: { data: { place_id: '-8865823086646928208', name: 'Rwanda', location_type: 'Country' } },
    id: '-8865823086646928208'
  },
  {
    data: { data: { place_id: '8037787278286232062', name: 'Réunion', location_type: 'Country' } },
    id: '8037787278286232062'
  },
  {
    data: { data: { place_id: '626799985901619848', name: 'Saudi Arabia', location_type: 'Country' } },
    id: '626799985901619848'
  },
  {
    data: { data: { place_id: '-4190888853505458636', name: 'Senegal', location_type: 'Country' } },
    id: '-4190888853505458636'
  },
  {
    data: { data: { place_id: '6386259637163436959', name: 'Serbia', location_type: 'Country' } },
    id: '6386259637163436959'
  },
  {
    data: { data: { place_id: '2171451774547450199', name: 'Sierra Leone', location_type: 'Country' } },
    id: '2171451774547450199'
  },
  {
    data: { data: { place_id: '2668868410128916434', name: 'Singapore', location_type: 'Country' } },
    id: '2668868410128916434'
  },
  {
    data: { data: { place_id: '-7443805896359927959', name: 'Sint Maarten', location_type: 'Country' } },
    id: '-7443805896359927959'
  },
  {
    data: { data: { place_id: '3813755483082859195', name: 'Slovakia', location_type: 'Country' } },
    id: '3813755483082859195'
  },
  {
    data: { data: { place_id: '6410108000700606737', name: 'Slovenia', location_type: 'Country' } },
    id: '6410108000700606737'
  },
  {
    data: { data: { place_id: '3317256940720781714', name: 'Somalia', location_type: 'Country' } },
    id: '3317256940720781714'
  },
  {
    data: { data: { place_id: '-2478090862324094135', name: 'South Africa', location_type: 'Country' } },
    id: '-2478090862324094135'
  },
  {
    data: { data: { place_id: '-4607653479203584261', name: 'South Korea', location_type: 'Country' } },
    id: '-4607653479203584261'
  },
  {
    data: { data: { place_id: '-1378972998044664988', name: 'Spain', location_type: 'Country' } },
    id: '-1378972998044664988'
  },
  {
    data: { data: { place_id: '1674261238603557541', name: 'Sri Lanka', location_type: 'Country' } },
    id: '1674261238603557541'
  },
  {
    data: { data: { place_id: '-3595955228073194326', name: 'St. Kitts & Nevis', location_type: 'Country' } },
    id: '-3595955228073194326'
  },
  {
    data: { data: { place_id: '99029710902098740', name: 'St. Lucia', location_type: 'Country' } },
    id: '99029710902098740'
  },
  {
    data: { data: { place_id: '-4224599321288666867', name: 'Sudan', location_type: 'Country' } },
    id: '-4224599321288666867'
  },
  {
    data: { data: { place_id: '4250510731683142115', name: 'Suriname', location_type: 'Country' } },
    id: '4250510731683142115'
  },
  {
    data: { data: { place_id: '-9029363556881223240', name: 'Sweden', location_type: 'Country' } },
    id: '-9029363556881223240'
  },
  {
    data: { data: { place_id: '5655432603301324742', name: 'Switzerland', location_type: 'Country' } },
    id: '5655432603301324742'
  },
  {
    data: { data: { place_id: '-616120563671017307', name: 'Syria', location_type: 'Country' } },
    id: '-616120563671017307'
  },
  {
    data: { data: { place_id: '2326746223823642084', name: 'Taiwan', location_type: 'Country' } },
    id: '2326746223823642084'
  },
  {
    data: { data: { place_id: '7421097594109921026', name: 'Tajikistan', location_type: 'Country' } },
    id: '7421097594109921026'
  },
  {
    data: { data: { place_id: '4193143159185317023', name: 'Tanzania', location_type: 'Country' } },
    id: '4193143159185317023'
  },
  {
    data: { data: { place_id: '-7544610135368989548', name: 'Thailand', location_type: 'Country' } },
    id: '-7544610135368989548'
  },
  {
    data: { data: { place_id: '-7260287296262877944', name: 'Togo', location_type: 'Country' } },
    id: '-7260287296262877944'
  },
  {
    data: { data: { place_id: '-5985587057060614680', name: 'Tonga', location_type: 'Country' } },
    id: '-5985587057060614680'
  },
  {
    data: { data: { place_id: '5169941345656088547', name: 'Trinidad & Tobago', location_type: 'Country' } },
    id: '5169941345656088547'
  },
  {
    data: { data: { place_id: '6763434224275225245', name: 'Tunisia', location_type: 'Country' } },
    id: '6763434224275225245'
  },
  {
    data: { data: { place_id: '7506474075071901506', name: 'Turkey', location_type: 'Country' } },
    id: '7506474075071901506'
  },
  {
    data: { data: { place_id: '490179429560949022', name: 'Turks & Caicos Islands', location_type: 'Country' } },
    id: '490179429560949022'
  },
  {
    data: { data: { place_id: '-6304121714405239850', name: 'U.S. Virgin Islands', location_type: 'Country' } },
    id: '-6304121714405239850'
  },
  {
    data: { data: { place_id: '-7813631452658058347', name: 'Uganda', location_type: 'Country' } },
    id: '-7813631452658058347'
  },
  {
    data: { data: { place_id: '598148624890232477', name: 'Ukraine', location_type: 'Country' } },
    id: '598148624890232477'
  },
  {
    data: { data: { place_id: '4567653256866191997', name: 'United Arab Emirates', location_type: 'Country' } },
    id: '4567653256866191997'
  },
  {
    data: { data: { place_id: '7212154512116281289', name: 'United Kingdom', location_type: 'Country' } },
    id: '7212154512116281289'
  },
  {
    data: { data: { place_id: '-7608764736147602991', name: 'United States', location_type: 'Country' } },
    id: '-7608764736147602991'
  },
  {
    data: { data: { place_id: '-3389594158348965462', name: 'Uruguay', location_type: 'Country' } },
    id: '-3389594158348965462'
  },
  {
    data: { data: { place_id: '-8124595007956181579', name: 'Uzbekistan', location_type: 'Country' } },
    id: '-8124595007956181579'
  },
  {
    data: { data: { place_id: '302730704137459992', name: 'Venezuela', location_type: 'Country' } },
    id: '302730704137459992'
  },
  {
    data: { data: { place_id: '2553902795103616732', name: 'Vietnam', location_type: 'Country' } },
    id: '2553902795103616732'
  },
  {
    data: { data: { place_id: '-1896999674785185761', name: 'Yemen', location_type: 'Country' } },
    id: '-1896999674785185761'
  },
  {
    data: { data: { place_id: '6813261119850044777', name: 'Zambia', location_type: 'Country' } },
    id: '6813261119850044777'
  },
  {
    data: { data: { place_id: '-2999473465018429484', name: 'Zimbabwe', location_type: 'Country' } },
    id: '-2999473465018429484'
  },
  {
    data: { data: { place_id: '3720556814064544082', name: 'Åland Islands', location_type: 'Country' } },
    id: '3720556814064544082'
  }
]

export default countries
