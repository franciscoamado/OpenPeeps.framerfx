import * as React from "react"

export class Accessory {
    public static options: Array<string> = [
        "None",
        "Eyepatch",
        "Glasses",
        "Glasses2",
        "Glasses3",
        "Glasses4",
        "Glasses5",
        "Sunglasses",
        "Sunglasses2",
    ]

    public static defaultOption: string = Accessory.options[0]

    public static None: JSX.Element = (
        <g
            id="accessories/*-None"
            transform="translate(88.521127, 88.978474)"
        ></g>
    )

    public static Eyepatch: JSX.Element = (
        <g
            id="accessories/Eyepatch"
            transform="translate(88.521127, 88.978474)"
            fill="#000000"
            fill-rule="evenodd"
        >
            <path
                d="M70.8584266,-12.5992383 C72.0795533,-13.0179232 73.053497,-11.7474966 72.81899,-10.6402324 C72.5422294,-9.3362011 71.181666,-8.28959445 70.2795533,-7.37043202 C69.3330745,-6.40244768 68.3675815,-5.45348486 67.3661731,-4.54045159 C65.4542012,-2.79448682 63.4725111,-1.15039288 61.3830745,0.381896745 L60.7441885,0.850227861 C58.8287857,2.25211436 56.9192012,3.62147404 54.8675815,4.83504743 C53.7563139,5.49023334 52.6344829,6.12428422 51.4978632,6.73508657 C51.0924407,6.95277737 50.5978632,7.28861299 50.0889195,7.53821768 C51.9499759,8.97539968 53.3823702,11.1692157 53.6929336,13.2129731 C54.4619477,18.2896071 51.1915252,22.9942647 46.5772294,24.8647147 C44.2767364,25.7967695 41.7161731,26.0672979 39.2570181,25.786202 C36.7556097,25.5006678 34.2203984,24.7609418 32.5957505,22.7110553 C31.1527928,20.8913292 30.6330745,18.5688009 30.5295533,16.2881198 C30.4809618,15.2060063 30.4915252,14.1405895 30.7196942,13.183384 C29.7246238,13.191838 28.7295533,13.187611 27.7429336,13.1981785 C25.3049054,13.2214271 22.8624407,13.2322059 20.4225111,13.1643625 C17.9063139,13.0925034 15.4027928,12.9804877 12.8950463,12.7566678 C11.7943421,12.6571218 10.6999759,12.4943821 9.6053984,12.3379829 C8.54293361,12.1879241 7.3703984,12.1308596 6.37744066,11.695478 C6.30983502,11.6680024 6.33809938,11.5707813 6.39645474,11.5515484 C7.45490545,11.2093723 8.65701812,11.2704525 9.75983502,11.2030318 L10.8347005,11.1378102 C11.7299701,11.0843133 12.6246238,11.0350989 13.5225111,11.0062647 C15.5966308,10.9380249 17.669133,10.9212424 19.7428483,10.8856893 L20.631666,10.8690983 C23.0718069,10.8204877 25.5119477,10.7930122 27.9520885,10.7148126 C28.9640604,10.6831101 29.9781449,10.623932 30.9943421,10.5689809 C31.1126519,10.3003547 31.2861026,10.0551883 31.4527928,9.81657385 C31.9513843,9.10220986 32.5851871,8.47238598 33.2422294,7.90174019 C34.5877928,6.72642121 36.1027928,5.85375585 37.7929336,5.26831553 C39.4677857,4.69013158 41.9174308,4.40330514 43.6893335,4.44062785 C45.4612362,4.47795057 47.9864195,4.72796328 48.7978632,6.17712179 C48.8823702,6.3271805 50.4267364,6.0376306 50.8851871,5.68657776 C51.9563139,4.86886348 53.0084266,4.02768931 54.0413139,3.16538011 C55.959835,1.56123138 57.9328632,-0.0175553093 59.7499759,-1.73371969 C61.6239195,-3.50483515 63.4830745,-5.30553965 65.2661731,-7.16542224 C66.1619477,-8.09747703 67.0556097,-9.03164533 67.9239195,-9.98694866 C68.8112435,-10.9612735 69.5739195,-12.1617432 70.8584266,-12.5992383 Z"
                id="🖍-Ink"
            ></path>
        </g>
    )

    public static Glasses: JSX.Element = (
        <g
            id="accessories/Glasses"
            transform="translate(88.521127, 88.978474)"
            fill="#000000"
        >
            <path
                d="M82.2021338,13.3747538 C80.1879085,27.0045229 66.1272042,28.5118732 63.6289648,14.9808047 C64.0299507,14.8051726 64.318331,14.4594035 64.2581197,13.788155 C64.2439648,10.8393957 65.1589648,7.72282427 67.8179789,6.08295734 C70.5657254,4.39088689 73.7814296,4.22307476 76.9612183,4.26576751 C83.0292465,4.12120391 82.9016408,9.19509041 82.2021338,13.3747538 M61.4277676,7.44701213 C59.5234014,7.36669902 57.1141056,7.43390841 55.4081197,8.59464423 C54.9391056,7.33119217 53.7205141,5.98214325 52.4892465,5.2608047 C57.0657254,5.39480078 61.7765704,4.94420196 66.3872746,4.59441722 C65.2836127,5.34703562 64.2568521,6.47775969 63.5894577,7.78496125 C62.9702324,7.45462074 62.083331,7.48547789 61.4277676,7.44701213 M53.0336831,14.8197558 C47.7530493,33.0034896 34.5718521,25.0778536 33.1348099,22.7475053 C30.5427676,18.8912078 30.055162,9.51697691 32.3129789,7.01057378 C35.5449507,4.74405323 40.1203732,5.32738004 43.9384014,5.27179491 C50.9526972,5.36647984 55.9343873,7.46561096 53.0336831,14.8197558 M88.4372746,6.45641331 C87.0025563,6.26873425 85.4693873,6.23090254 84.1354437,6.86283992 C83.7247394,5.11645245 82.4353732,3.65644462 80.9795282,3.01393973 C80.803331,2.79286732 80.8297394,2.67408845 80.227838,2.70727045 C76.5317113,1.59599061 72.3957254,2.18396712 68.8438944,3.32356791 C63.2343169,3.79614716 57.3490352,4.16875773 51.6923451,4.81992798 C46.393331,2.43927828 30.4018521,2.09033894 29.4080493,7.95805714 C28.1579789,7.77101213 26.0290352,6.78675382 24.9786127,8.12185362 C17.2734718,6.81507476 9.31185211,8.63120783 1.57333099,9.4400454 C-0.374556338,9.7989182 -1.3778662,13.6662059 0.833260563,13.6133683 C2.07635915,13.2758419 0.795021127,11.2052431 2.46889437,11.0494779 C9.93530282,10.2336658 17.2384014,9.07631155 24.7812887,8.94083601 C24.5188944,10.2438106 29.770162,10.328562 29.8476972,9.56770098 C29.8588944,9.57340744 29.8707254,9.57721174 29.8821338,9.58228415 C28.5845282,14.4200924 29.7557958,21.3823937 32.1008662,24.3822998 C35.3865,28.3104564 43.6354437,29.4373761 47.2931197,26.9100493 C52.0113592,24.5773761 56.9197394,12.8681472 55.541007,8.97803366 C58.0432606,8.18462466 60.516993,8.42281644 63.1138944,8.8269182 C62.5193873,10.5069417 61.4930493,14.6426442 62.9695986,15.0013057 C62.6985423,23.2122646 70.168331,28.335607 77.0543873,24.9673174 C83.0144577,22.1684055 85.0988239,13.3090239 84.3695282,7.93163836 C85.1115,9.36586145 91.3413592,7.80440548 88.4372746,6.45641331"
                id="🖍-Ink"
            ></path>
        </g>
    )

    public static Glasses2: JSX.Element = (
        <g
            id="accessories/Glasses-2"
            transform="translate(88.521127, 88.978474)"
            fill="#000000"
            fill-rule="evenodd"
        >
            <path
                d="M78.6572746,20.1750129 C76.0922746,22.8264023 71.8103028,23.5872634 68.3976972,22.1652986 C59.635162,18.5028094 63.9241056,7.07932603 70.6819225,4.01157652 C71.5261479,3.80107162 72.6536831,3.30165088 73.6819225,3.18836712 C73.7748803,3.14271546 73.9772746,3.27480939 74.2225563,3.14990137 C81.6741761,3.98219883 83.3710775,15.5540501 78.6572746,20.1750129 M50.3943169,20.8536587 C47.5174859,24.6708564 42.1690352,25.8485002 37.7991761,24.0740031 C29.1663592,20.6729542 32.2282606,10.543146 38.134669,6.57187397 C50.6115,1.88179961 55.7636831,13.8154826 50.3943169,20.8536587 M31.6802324,12.3958427 C31.6722042,12.3920384 31.6641761,12.3901362 31.6559366,12.3863319 C31.7015704,12.3662536 31.7472042,12.3461753 31.7926268,12.3256744 C31.777838,12.3643515 31.7617817,12.4026059 31.7474155,12.441283 C31.7250211,12.4258544 31.7053732,12.4078896 31.6802324,12.3958427 M84.5964296,8.26965088 C83.8920634,8.27113033 82.8745986,8.38695029 82.2915,8.87580352 C80.8536127,4.02468023 75.5461479,-0.465034051 70.9303732,2.808782 C67.2955141,3.97818317 64.5982606,6.57166262 63.0653028,10.0196313 C60.3012887,8.37490333 55.9550915,9.07722035 53.5582606,11.2522262 C51.9885423,6.06336517 48.1253028,4.24638669 43.5270634,3.97818317 C38.5081901,3.15581918 33.5057958,8.0318818 31.9449507,11.943553 C30.6471338,11.7958192 28.7079085,11.3826294 27.486993,12.1838583 C19.5629789,10.1050168 5.70910563,8.95886419 4.09819014,10.1138935 C2.95016197,10.5545589 2.32016197,13.2653378 3.9236831,13.4115922 C5.32100704,13.2131342 3.76058451,11.4253221 5.16910563,11.2302458 C12.6739648,10.7648524 19.9595282,12.2768524 27.3849507,12.911326 C28.0479085,13.8034356 30.1899507,14.1018622 31.3326972,13.7434121 C29.5329085,20.3789659 33.4181197,24.8934082 39.2395986,26.2456274 C48.2537535,28.3170716 56.0962183,20.2502536 53.7391056,11.859647 C56.4697394,10.5006646 59.6106549,10.5589973 62.5853028,11.2748407 C57.6145986,29.5756626 87.0773451,28.7545667 82.4757254,9.50287984 C85.5380493,11.0267155 86.2031197,8.57716556 84.5964296,8.26965088"
                id="🖍-Ink"
            ></path>
        </g>
    )

    public static Glasses3: JSX.Element = (
        <g
            id="accessories/Glasses-3"
            transform="translate(88.521127, 88.978474)"
            fill="#000000"
            fill-rule="evenodd"
        >
            <path
                d="M77.5634366,20.7796016 C76.1409718,22.691265 73.5039296,23.3001652 71.0716056,23.0898716 C65.8256197,22.5847444 64.1745634,16.6244548 64.0025915,11.9918677 C67.5204085,12.9818325 63.7051268,5.97049785 75.7302676,5.19949198 C79.9693521,4.84611429 78.8006197,7.40725714 80.673507,9.27855264 C80.6350563,13.2058638 79.9816056,17.4732376 77.5634366,20.7796016 M52.5766056,16.2668501 C49.4794225,30.7766818 32.5192817,27.3253315 30.737662,14.2457072 C32.3828028,13.084126 31.949493,10.2158912 33.9932958,9.1766818 C37.2324507,7.10629432 41.2816056,7.1948501 44.9599859,7.24346067 C49.6617465,7.56661526 51.0016056,9.51505362 53.4168169,11.6408149 C53.3006197,13.0606661 52.9655493,14.7434372 52.5766056,16.2668501 M84.2819577,2.79643914 C84.1080845,2.76748415 83.934,2.74021996 83.7599155,2.71464658 C83.6240704,2.63750372 83.4645634,2.57811429 83.2790704,2.54239609 C82.8554789,2.43481879 82.4348451,2.36232564 82.0148451,2.32322583 C75.9869577,0.966145597 62.0418169,2.89302622 61.4663239,8.03898317 C59.5467465,8.68000861 57.8857606,8.10598121 55.6609014,8.16304579 C53.9673803,1.08175421 24.6892817,2.08122975 23.2811831,6.35050568 C23.2759014,6.34902622 23.2706197,6.34775812 23.2651268,6.34606732 C21.912169,5.92717104 19.9175915,6.02819648 18.369,5.96183249 C15.0624507,5.89250959 11.7520986,6.18734325 8.51695775,6.88501057 C2.45885915,7.84813386 -5.80909859,8.97568767 -1.59578873,16.543719 C-1.59494366,16.5449871 -1.59430986,16.5464665 -1.59325352,16.5477346 L-1.59261972,16.5471006 C-0.866492958,17.2916877 0.365830986,16.6920869 0.411676056,15.6841573 C-1.00487324,12.098811 2.19456338,11.6682904 4.65625352,10.6379577 C10.7815352,8.43653307 17.0177324,8.13134325 23.3528028,8.81231389 C23.8294225,9.37366027 24.5525915,9.86314755 25.3169577,10.1193041 C29.552662,10.8226779 27.3204085,13.9658795 29.9978028,14.4230301 C29.5059718,25.3798521 42.8033662,31.3606427 50.5080845,24.158036 C53.5843521,21.1492532 54.317662,16.6920869 55.0309014,12.6745292 C55.4080141,12.5897777 55.6478028,12.3834998 55.7878732,12.1104352 C56.6948451,11.2045879 57.2646338,10.3680634 59.0580845,10.1193041 C60.8515352,9.87075616 62.232169,10.3697542 62.4189296,10.5225605 C62.4660423,10.6174568 62.5165352,10.7125644 62.5752676,10.807672 C62.6572394,10.9494881 62.7687887,11.0625605 62.8955493,11.1515389 C61.124493,22.0622865 69.5914648,28.9624509 78.1391408,23.3035468 C81.8532254,19.808447 82.6380845,14.4574802 82.7931549,9.6813863 C83.2966056,9.37746458 83.6154085,8.78843131 83.4411127,8.04785988 C83.2009014,7.02703796 83.7641408,6.14317104 84.6611831,5.69933542 C85.8267465,5.12298317 85.6205493,3.0181456 84.2819577,2.79643914"
                id="🖍-Ink"
            ></path>
        </g>
    )

    public static Glasses4: JSX.Element = (
        <g
            id="accessories/Glasses-4"
            transform="translate(88.521127, 88.978474)"
        >
            <path
                d="M78.2254709,19.8840932 C76.2860953,22.3080593 68.6938489,24.9986485 64.6530544,22.0778469 C60.6122598,19.1570452 59.0153826,17.1215372 58.4752593,13.471854 C58.4176668,13.0826941 57.7143038,12.8238467 57.4169522,13.1001463 C55.7519455,14.6472727 54.6741428,16.6177789 53.6063305,18.5933264 C52.4020101,20.8214259 51.2158177,23.063201 49.0272447,24.5715193 C45.1508251,26.6502179 38.1380357,26.9462623 36.0661853,26.0293353 C32.0973119,24.2728537 28.9577552,20.516308 28.2438141,15.3467378 C27.7596822,13.818 27.3055667,12.8927933 26.8814676,12.5711179 C26.2784252,12.1137156 22.9504092,11.7062336 22.5858273,11.63856 C16.0155922,10.4189943 7.70596602,9.64159611 1.85408603,13.932216 C1.06214693,14.4111065 -1.64902649,16.2102543 -1.68969837,15.7678647 C-1.71745479,14.0350029 0.24553597,10.1128517 4.70998065,8.24658535 C10.23079,5.9387281 18.4374903,5.80375595 23.1918306,6.31307379 C23.4309405,6.33868889 24.2460398,6.1383229 24.3036309,6.11337885 C31.5064744,2.99365872 39.7942575,3.82221274 47.5013004,5.13344482 C48.6056743,5.34783829 58.4922895,7.79681813 62.4249057,6.31307379 C68.9269163,3.65765266 75.8592565,1.73388835 82.8806724,2.49074692 C82.9393842,2.49707563 83.8257711,7.87939673 83.1352796,8.24658535 C82.5857882,8.53879308 81.6507546,9.28755652 81.3185887,9.69733558 C81.0216449,10.0636627 80.8345184,10.5190869 80.8511154,11.1500189 C80.9846459,14.7998655 79.943644,17.7366014 78.2254709,19.8840932 Z M51.491907,16.6273673 C52.3163579,15.434285 52.5765251,12.754156 52.231353,10.7989146 C52.0565815,9.80891451 51.7172246,9.02089459 51.2913522,8.6286287 C51.0082724,8.36788728 50.6852844,8.24514235 50.333047,8.26336012 C50.139924,8.27334848 49.9306641,8.32829687 49.7092628,8.44779243 C46.7106797,6.82512581 43.0780588,6.24088016 39.6346681,6.40890515 C36.8935144,6.40839168 34.9377618,7.05565675 33.611493,8.06321133 C32.0156436,9.27556397 31.2966626,11.0183876 31.2550637,12.9084738 C31.2057025,15.1512498 32.1266555,17.6048475 33.6373844,19.5462851 C35.0833704,21.4045216 37.0614176,22.782132 39.2073203,23.0999753 C41.6433647,23.5837372 44.1258305,23.1157177 46.2842154,21.9708712 C48.4979251,20.7966794 50.3678754,18.9108884 51.491907,16.6273673 Z M75.5297404,17.8926073 C76.9191622,16.2500785 77.8430382,14.113264 77.9836684,11.9960988 C78.111652,10.0693264 77.5959096,8.16075928 76.1699168,6.58350297 C74.8771514,5.47344447 72.5927593,5.45505194 70.1896831,6.07321124 C67.0823593,6.87252887 63.8677741,8.65882243 62.7961628,9.81247894 C62.5437419,9.94488037 62.3094523,10.1754438 62.1053464,10.6700039 L62.1038866,10.8463142 C61.7792617,12.3440585 61.9718782,13.8639497 62.5334248,15.266056 C63.1434088,16.7891036 64.1895759,18.1717244 65.4651742,19.2266546 C67.1599083,20.6232399 68.929012,21.0507709 70.584845,20.8252445 C72.4604381,20.5697865 74.2045306,19.4592268 75.5297404,17.8926073 Z"
                id="🎨-Background"
                fill="#FFFFFF"
            ></path>
            <path
                d="M62.2013239,5.71985753 C68.7854789,3.0306364 75.8234366,1.09234286 82.9486479,1.86038982 C83.5378732,1.63614716 84.2692817,1.82509432 84.5304085,2.65865988 C87.0683662,10.3930239 81.4087183,8.24211194 81.4847746,11.133384 C82.0780141,27.3445855 60.2973803,30.113063 57.8483662,13.5647577 L57.8033662,13.5913879 L57.8033662,13.5913879 C54.2798451,16.8806325 53.537662,22.2330787 49.3868873,25.0937049 C41.0137183,31.2196932 29.1442817,26.3660337 27.6197746,15.4603585 L27.5865234,15.3128216 C27.0747805,13.0871517 26.4629362,12.5352974 23.9390704,12.5462607 L23.5403464,12.4670115 C16.9827946,11.1745229 8.25045634,10.0130583 2.21061972,14.4579241 C0.896957746,15.2221667 0.835267606,17.1868791 -0.274732394,18.0405229 C-1.49078873,18.2768125 -2.23994366,16.8136344 -2.32233803,15.8010552 C-2.51501408,5.70633112 15.5420282,4.98013151 23.6289296,5.84645636 C23.7833662,5.68646419 24.1131549,5.70633112 24.2242817,5.90563444 C31.5379437,2.73791624 39.7775915,3.17625675 47.6084366,4.50839765 C52.4593521,5.44784971 57.2504789,7.58777143 62.2013239,5.71985753 Z M82.2930845,3.72407671 C78.342169,3.52646419 74.687662,3.74267554 70.8096338,4.69269511 C68.765831,5.18598669 67.1973803,5.80968141 65.2410423,6.5597636 C53.0386479,11.9680063 51.6311831,2.35473816 24.2787887,6.12311389 C24.632662,7.6393409 24.6977324,9.14056204 24.7167465,10.565063 C30.3016014,10.3399242 28.9866904,15.6747489 31.0790487,19.4219234 L31.143507,19.5349808 C34.1929437,25.0021902 41.3887183,27.5523429 47.1932958,23.9259945 C52.0359718,21.1023546 52.5083662,13.9407499 57.3299155,11.0985112 C61.5094225,10.9340806 59.8399859,16.5771335 62.114493,18.8964916 C65.3160423,23.1702059 72.1211831,23.7676932 76.1356901,19.7478106 C78.0191408,17.8135327 79.0201268,15.3576423 79.0754789,12.7191452 C79.1804789,11.0334153 78.8914648,9.32042114 80.1654085,8.13474599 C81.0584366,7.22720783 82.6450563,7.5300728 82.827169,6.15819804 C82.9429437,5.34703562 82.6057606,4.46718434 82.2930845,3.72407671 Z M39.3549296,5.93359609 C43.2796479,5.74021057 47.4323239,6.42202661 50.8022535,8.34763914 C53.2966901,6.36179178 53.9078873,14.2540344 52.2521831,16.536829 C49.8667606,21.4194434 44.313169,24.6296431 38.9657746,23.5635922 C30.623662,22.3542458 24.8112676,5.91901292 39.3549296,5.93359609 Z M50.5626761,8.87686027 L50.3492185,8.84565156 C46.7339243,8.29380188 36.8899099,5.73717558 33.093169,9.77235147 C29.4084507,16.4656039 38.7564085,27.7081714 48.4842254,18.7532595 C51.1916197,15.9957722 52.2409859,12.6519992 50.5626761,8.87686027 Z M62.0196127,9.73230059 C63.8918662,7.51460196 73.4337676,3.02256282 76.7597535,5.90516947 C82.8301056,12.7108603 73.2032746,26.4767389 65.1400352,19.7699601 C62.4544014,17.5281675 60.6875704,13.9563476 61.4608099,10.4976 L61.4619992,10.3526137 C61.4636737,10.3000579 61.4734859,10.3120344 61.5296831,10.2465159 C61.6291901,9.98507554 61.8083451,9.81810881 62.0196127,9.73230059 Z M76.6750352,13.8572243 C78.7222183,2.74928689 70.1660915,6.97206575 63.139331,9.93688767 C63.5164437,10.2816 63.5147535,10.7522771 63.4063732,11.1390481 C62.6652465,19.3808642 72.6786972,24.051283 76.6750352,13.8572243 Z M23.4869577,6.38624501 C20.5560423,7.37916869 1.16991549,5.60340352 -0.621,14.694425 C1.26942254,11.6304798 5.1846338,10.4145816 8.70435211,9.75474599 C13.4918873,8.85714129 18.2532254,9.37685166 22.9735775,10.3213761 L23.0710683,9.34408428 C23.1757598,8.30746013 23.2861417,7.33770673 23.4869577,6.38624501 Z"
                id="🖍-Ink"
                fill="#000000"
            ></path>
        </g>
    )

    public static Glasses5: JSX.Element = (
        <g
            id="accessories/Glasses-5"
            transform="translate(88.521127, 88.978474)"
            fill="#000000"
        >
            <path
                d="M74.5743803,22.486699 C71.4036761,24.0143389 66.9801549,21.7611335 64.8482535,19.4009847 C64.0722676,18.5416344 63.4735352,16.0829965 63.7720563,14.523654 C64.5805775,10.3006638 67.6186056,7.76615108 70.8258592,6.90067162 C75.2717746,5.70062466 79.746,8.74068728 79.2243803,12.3281472 C78.7298028,15.7281393 77.9804366,20.6599984 74.5743803,22.486699 M52.9931831,14.3746521 C52.7390282,18.9768047 49.0445915,23.0049299 44.6290986,24.198425 C37.5148732,26.1842724 33.9989577,21.1813996 32.4064225,15.7917558 C32.2481831,15.2561941 31.8761408,13.621611 32.8743803,12.2195131 C36.8003662,6.7043272 46.3524085,7.64441331 51.1232535,9.15852681 C52.5197324,10.494472 53.0905775,12.4226207 52.9931831,14.3746521 M78.0193099,6.43696908 C78.0171972,6.43971663 78.014662,6.44204149 78.0125493,6.44478904 C77.9962817,6.43485558 77.9802254,6.42471076 77.9635352,6.41498865 C77.9819155,6.42259726 78.0013521,6.42914912 78.0193099,6.43696908 M83.9715634,6.96893777 C83.5583239,2.28330176 68.8619155,4.0774544 67.1436761,4.46147789 C62.4543803,5.8411726 58.404169,9.59475382 53.1613521,7.94474207 C47.7290282,1.88680861 29.4355775,3.62410802 25.6006479,6.71003366 C24.8747324,6.42513346 23.9920563,6.57793973 23.0567746,6.8467773 C18.2538169,6.67325871 -3.67238028,8.32961096 0.812408451,14.4619397 C1.49311268,14.9343076 2.1731831,14.4536971 2.19198592,13.4806403 C25.571493,5.03783014 23.3052254,12.9459241 26.0779014,12.0223233 C26.5012817,12.1442724 26.9430423,12.2214153 27.3294507,12.3025738 C29.475507,12.9932665 30.204169,12.7798027 30.4868451,15.1898301 C32.4290282,33.7994348 57.2012113,27.3764994 55.1694507,12.1119358 C57.1811408,12.0011883 58.9407887,11.1310591 61.0680423,11.9806873 C62.5450141,26.3603272 74.1121268,26.9406951 77.5931831,21.9559984 C80.2181831,18.4961941 79.1772676,13.2749965 82.785507,10.5532274 C84.2098732,11.7456658 84.3015634,7.72113346 83.9715634,6.96893777"
                id="🖍-Ink"
            ></path>
        </g>
    )

    public static Sunglasses: JSX.Element = (
        <g
            id="accessories/Sunglasses"
            transform="translate(88.521127, 88.978474)"
            fill="#000000"
        >
            <path
                d="M71.3680491,3.1702544 C76.3269356,3.1702544 79.1568052,4.23707181 80.1938017,4.32017463 L80.2249868,4.32240913 C80.6563105,4.34999802 81.0432333,4.38607581 81.4491851,4.54312029 C82.9419037,5.11824266 83.1850519,6.68444304 82.313947,7.67148884 C82.2528428,9.713916 82.521363,12.1003555 82.06065,14.1493615 C81.4923175,22.7874448 77.431531,24.2451996 75.1233146,24.7772408 C73.9644491,25.0444286 72.5909789,25.150752 71.3600147,24.8687086 C69.2600599,24.7903986 67.1839971,24.1327218 65.4077466,22.9875704 C62.9339779,21.3914466 61.0966232,18.9381571 60.5003815,16.0266798 C60.2177929,14.6388685 60.0857253,13.1943522 60.2395124,11.7836899 L60.2623077,11.5893242 C59.4582272,11.2045653 58.526441,11.131773 57.5658998,11.0978175 C57.1070897,11.0814763 56.6548341,11.066833 56.2154759,11.0863575 C55.786055,11.1343197 55.3617085,11.1981986 54.9360934,11.2852097 C54.4713632,11.4254886 54.0324278,11.6570231 53.6271104,12.0237432 L53.5992012,12.5589678 C53.5230852,13.8959681 53.3475956,15.2370007 53.0769611,16.5487466 C52.6773523,18.4842137 52.0345953,20.3326697 50.6666224,21.7055356 C50.2035836,22.3973802 49.6305996,23.014947 48.9349843,23.5497472 C46.4081459,25.4960376 42.9751046,26.21059 39.8243268,25.9414922 C33.4278375,25.3954443 29.7305048,20.3156919 28.8784289,18.1444458 L28.8275239,18.0129005 C28.2119991,16.3987184 27.7214607,14.3043319 25.7764921,13.9575126 L25.3628246,13.883161 C24.4752804,13.7164979 23.6563102,13.4844691 23.1359026,12.6181778 C22.9077661,12.2399977 22.7904207,11.8170387 22.7616658,11.3858031 C22.4580477,11.4091475 22.1548524,11.4314309 21.8527144,11.4530775 C19.4424813,11.9629946 4.98596345,12.3953444 3.83204944,12.3953444 C3.83204944,12.3953444 1.61394912,13.3292972 0.677465773,12.6056567 C0.0283657826,12.1024777 -0.185181771,11.4318553 0.172140373,10.6720996 C0.71128711,9.52898231 3.19864834,8.84138978 4.30313196,8.62367284 C4.30313196,8.62367284 22.1266578,8.77176371 23.4094972,8.52844238 C24.2032175,7.70968885 25.6229916,7.82174221 26.8093434,7.69228662 C27.7914507,6.99174089 29.1653438,6.52251745 30.2506305,6.20842848 C30.4717896,6.12460068 30.6908345,6.04353177 30.9037477,5.96713175 C32.8933343,5.25830936 34.9613627,4.88288816 37.0608946,4.68127699 C39.2259708,4.47542139 41.3973899,4.56858697 43.5497801,4.86357593 C44.4568287,4.98666485 45.3554199,5.14583155 46.247668,5.3540216 C47.8453103,5.56471853 49.4336611,5.91176412 51.0318841,6.32346342 L51.351666,6.40664408 C53.0346745,6.84806641 54.7641982,7.22985428 56.506408,6.93062088 C57.9247725,6.68859906 59.2887664,6.14252462 60.5965287,5.55202796 L60.7667874,5.47477608 C63.6422792,4.16133242 68.1329094,3.1702544 71.3680491,3.1702544 Z M46.0747157,7.97263224 C45.0137438,7.73918774 44.5606424,9.3756337 45.6249972,9.60971487 C46.378691,9.77548242 47.0174738,10.155707 47.4490469,10.7998619 L47.4944898,10.8698907 C48.0736053,11.7917843 49.5379918,10.940773 48.954859,10.0129372 C48.2987817,8.9688036 47.2792507,8.23748564 46.0747157,7.97263224 Z M77.1492677,6.95799755 C76.7752423,6.69441749 76.2092356,6.89008642 75.9920937,7.26253652 C75.7531059,7.67267317 75.9097469,8.12931765 76.260044,8.39762278 L76.2957118,8.4238168 C76.6170226,8.65036832 76.9299546,9.056466 76.969253,9.47256193 L76.972721,9.52461373 C77.0147962,10.6135262 78.7064734,10.619044 78.6641867,9.52461373 C78.6229573,8.45395236 78.0032465,7.55943548 77.1492677,6.95799755 Z"
                id="🖍-Ink"
            ></path>
        </g>
    )

    public static Sunglasses2: JSX.Element = (
        <g
            id="accessories/Sunglasses-2"
            transform="translate(88.521127, 88.978474)"
            fill="#000000"
            fill-rule="evenodd"
        >
            <path
                d="M84.2819577,2.79643914 C84.1080845,2.76748415 83.934,2.74021996 83.7599155,2.71464658 C83.6240704,2.63750372 83.4645634,2.57811429 83.2790704,2.54239609 C82.8554789,2.43481879 82.4348451,2.36232564 82.0148451,2.32322583 C75.9869577,0.966145597 62.0418169,2.89302622 61.4663239,8.03898317 C59.5467465,8.68000861 57.8857606,8.10598121 55.6609014,8.16304579 C53.9673803,1.08175421 24.6892817,2.08122975 23.2811831,6.35050568 C23.2759014,6.34902622 23.2706197,6.34775812 23.2651268,6.34606732 C21.912169,5.92717104 19.9175915,6.02819648 18.369,5.96183249 C15.0624507,5.89250959 11.7520986,6.18734325 8.51695775,6.88501057 C2.45885915,7.84813386 -5.80909859,8.97568767 -1.59578873,16.543719 C-1.59494366,16.5449871 -1.59430986,16.5464665 -1.59325352,16.5477346 L-1.59261972,16.5471006 C-0.866492958,17.2916877 0.365830986,16.6920869 0.411676056,15.6841573 C-1.00487324,12.098811 2.19456338,11.6682904 4.65625352,10.6379577 C10.7815352,8.43653307 17.0177324,8.13134325 23.3528028,8.81231389 C23.8294225,9.37366027 24.5525915,9.86314755 25.3169577,10.1193041 C29.552662,10.8226779 27.3204085,13.9658795 29.9978028,14.4230301 C29.5059718,25.3798521 42.8033662,31.3606427 50.5080845,24.158036 C53.5843521,21.1492532 54.317662,16.6920869 55.0309014,12.6745292 C55.4080141,12.5897777 55.6478028,12.3834998 55.7878732,12.1104352 C56.6948451,11.2045879 57.2646338,10.3680634 59.0580845,10.1193041 C60.8515352,9.87075616 62.232169,10.3697542 62.4189296,10.5225605 C62.4660423,10.6174568 62.5165352,10.7125644 62.5752676,10.807672 C62.6572394,10.9494881 62.7687887,11.0625605 62.8955493,11.1515389 C61.124493,22.0622865 69.5914648,28.9624509 78.1391408,23.3035468 C81.8532254,19.808447 82.6380845,14.4574802 82.7931549,9.6813863 C83.2966056,9.37746458 83.6154085,8.78843131 83.4411127,8.04785988 C83.2009014,7.02703796 83.7641408,6.14317104 84.6611831,5.69933542 C85.8267465,5.12298317 85.6205493,3.0181456 84.2819577,2.79643914 M47.5535889,7.97263224 C46.492617,7.73918774 46.0395156,9.3756337 47.1038704,9.60971487 C47.8575643,9.77548242 48.496347,10.155707 48.9279201,10.7998619 L48.973363,10.8698907 C49.5524786,11.7917843 51.0168651,10.940773 50.4337323,10.0129372 C49.777655,8.9688036 48.758124,8.23748564 47.5535889,7.97263224 Z M78.6281409,6.95799755 C78.2541156,6.69441749 77.6881088,6.89008642 77.4709669,7.26253652 C77.2319792,7.67267317 77.3886202,8.12931765 77.7389173,8.39762278 L77.774585,8.4238168 C78.0958959,8.65036832 78.4088279,9.056466 78.4481263,9.47256193 L78.4515942,9.52461373 C78.4936694,10.6135262 80.1853466,10.619044 80.14306,9.52461373 C80.1018305,8.45395236 79.4821197,7.55943548 78.6281409,6.95799755 Z"
                id="🖍-Ink"
            ></path>
        </g>
    )
}