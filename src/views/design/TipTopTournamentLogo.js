import React from "react";
import styled from "styled-components";

const Logo = styled.svg`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
// Author: Freepik
export const TipTopTournamentLogo = props => {
    return (
        <Logo viewBox="-300 -10 1250 500" {...props}>
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
               fill="#2F80ED" stroke="none">
                <path d="M2963 4824 c-60 -22 -127 -86 -160 -152 -38 -78 -39 -172 -2 -252
l25 -55 -78 -88 c-169 -192 -296 -437 -348 -669 -7 -32 -16 -58 -19 -58 -4 0
-31 25 -61 56 -324 330 -824 484 -1266 390 -457 -97 -836 -447 -982 -906 -53
-166 -66 -257 -66 -450 0 -205 15 -307 74 -481 204 -612 744 -1028 1340 -1033
74 0 169 3 211 7 l76 8 177 -410 c98 -225 185 -419 193 -430 9 -14 25 -21 45
-21 17 0 124 41 239 91 176 77 209 95 219 118 10 25 -6 65 -174 452 l-185 424
27 23 c176 154 250 237 336 383 60 101 125 257 151 364 10 44 20 82 22 84 1 2
43 -31 92 -72 50 -42 129 -99 176 -128 61 -38 84 -57 80 -68 -2 -9 -54 -211
-115 -448 -116 -453 -117 -458 -72 -482 10 -5 117 -35 237 -65 217 -55 220
-56 245 -38 22 17 38 69 139 464 l114 445 106 6 c353 20 648 153 907 412 225
224 357 471 425 795 30 141 33 418 6 560 -22 116 -83 303 -130 396 -192 380
-532 646 -932 729 -182 38 -443 27 -615 -25 -36 -11 -67 -20 -70 -20 -3 0 -22
22 -42 49 -54 72 -137 111 -232 110 -39 0 -90 -7 -113 -15z m181 -128 c94 -39
126 -177 59 -256 -91 -109 -263 -69 -294 68 -30 132 108 241 235 188z m864
-100 c363 -78 657 -306 829 -642 103 -201 146 -381 146 -614 1 -328 -96 -618
-292 -875 -59 -78 -198 -215 -218 -215 -8 0 -279 68 -602 151 -322 82 -701
180 -842 216 l-256 65 -17 97 c-31 179 -116 397 -217 557 -44 69 -45 76 -24
182 51 253 176 502 344 683 l70 76 58 -19 c72 -25 145 -19 220 18 90 43 163
150 163 236 0 24 7 32 35 44 43 17 149 43 230 54 83 12 285 4 373 -14z m-2478
-722 c548 -94 981 -536 1096 -1119 22 -112 25 -365 5 -476 l-13 -77 -882 -383
c-484 -210 -890 -384 -901 -386 -43 -8 -249 154 -355 279 -168 198 -276 425
-326 683 -24 122 -24 358 0 480 101 525 474 910 968 1000 103 19 296 18 408
-1z m2029 -1530 c421 -108 767 -197 769 -199 6 -6 -87 -55 -168 -88 -47 -20
-122 -45 -167 -56 -82 -21 -289 -48 -299 -39 -2 3 5 45 17 95 25 100 21 134
-16 151 -36 17 -419 112 -448 112 -37 0 -55 -29 -79 -123 -13 -48 -27 -87 -33
-87 -25 0 -188 123 -267 201 l-88 87 0 71 c0 39 3 71 7 71 3 0 351 -88 772
-196z m23 -260 c-6 -28 -262 -1028 -265 -1030 -2 -2 -277 67 -284 71 -2 1 214
854 257 1016 l10 36 142 -37 c125 -33 143 -40 140 -56z m-1027 -76 c-14 -46
-98 -194 -153 -271 -52 -73 -213 -237 -231 -237 -5 0 -23 35 -41 78 -34 82
-52 108 -81 117 -14 5 -250 -91 -430 -175 -52 -24 -54 -51 -10 -153 46 -107
51 -101 -84 -111 -147 -11 -382 25 -505 77 l-35 15 50 22 c28 12 111 48 185
80 654 286 1326 578 1333 579 5 1 5 -9 2 -21z m-338 -963 c117 -269 213 -492
213 -495 0 -10 -265 -119 -271 -112 -10 11 -431 984 -427 987 9 10 254 113
263 111 5 -1 105 -223 222 -491z"/>
                <path d="M1550 3757 c-224 -63 -299 -340 -136 -503 151 -150 401 -102 489 95
29 63 29 169 0 232 -61 136 -218 214 -353 176z m161 -150 c107 -72 107 -212 0
-284 -72 -49 -175 -23 -228 56 -49 72 -23 175 56 228 25 17 48 23 86 23 38 0
61 -6 86 -23z"/>
            </g>
        </Logo>
    );
};
