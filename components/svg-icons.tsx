import { FC } from 'react';
import SvgIconConstituentValues from 'types/svg-icons';
import { ThemeInitProps } from 'components/theme';

// FC can be parameterized via Abstraction

export interface SvgIcon extends FC<SvgIconConstituentValues> {}

export const AndrewIcon: SvgIcon = ({
	width = '1209',
	height = '271',
	strokeColor = '',
	fillColor = 'none',
	fillColor2 = '#000000',
	rotateCenter = 0
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 1209 271'
			fill={fillColor}
			xmlns='http://www.w3.org/2000/svg'
			className={`stroke-current ${strokeColor} antialiased`}
			transform={`rotate(${rotateCenter}, 1209, 271)`}
		>
			<path
				d='M46.7656 260C42.737 260 38.7083 260 34.6797 260C30.651 260.237 27.0964 260.474 24.0156 260.711C20.9349 260.948 18.2096 261.185 15.8398 261.422C13.4701 261.659 11.5742 261.777 10.1523 261.777C8.73047 262.014 7.90104 262.133 7.66406 262.133C2.6875 262.133 0.199219 259.645 0.199219 254.668C0.199219 253.483 0.199219 252.535 0.199219 251.824C0.436198 250.876 0.673177 250.047 0.910156 249.336C1.38411 248.625 1.73958 248.033 1.97656 247.559C2.21354 247.085 2.6875 246.729 3.39844 246.492C4.34635 246.018 4.9388 245.781 5.17578 245.781C5.41276 245.544 6.1237 245.307 7.30859 245.07C8.73047 244.833 9.5599 244.715 9.79688 244.715C10.2708 244.478 11.3372 244.241 12.9961 244.004C14.8919 243.767 16.0768 243.648 16.5508 243.648C22.2383 242.938 26.5039 241.516 29.3477 239.383C32.1914 237.013 34.9167 232.629 37.5234 226.23C54.5859 188.077 73.0703 149.212 92.9766 109.637C128.049 43.2826 146.178 9.27604 147.363 7.61719C147.837 7.14323 148.548 6.55078 149.496 5.83984C152.103 3.94401 155.065 2.99609 158.383 2.99609C164.781 2.99609 169.876 7.61719 173.668 16.8594L225.922 137.719C252.464 201.94 265.971 234.406 266.445 235.117C269.052 238.909 272.488 241.397 276.754 242.582C281.257 243.767 285.048 244.596 288.129 245.07C291.447 245.544 293.342 246.966 293.816 249.336C294.29 251.232 294.527 252.891 294.527 254.312C294.527 259.526 292.039 262.133 287.062 262.133L281.02 261.422C276.991 261.185 271.54 260.829 264.668 260.355C258.033 260.118 251.516 260 245.117 260C237.297 260 230.188 260.118 223.789 260.355C217.391 260.829 212.296 261.185 208.504 261.422C204.949 261.896 202.816 262.133 202.105 262.133C197.129 262.133 194.641 260.118 194.641 256.09C194.641 254.905 194.641 253.839 194.641 252.891C194.878 251.943 195.115 251.113 195.352 250.402C195.826 249.454 196.062 248.743 196.062 248.27C196.299 247.796 196.892 247.322 197.84 246.848C198.788 246.374 199.499 246.137 199.973 246.137C200.447 245.9 201.395 245.663 202.816 245.426C204.238 245.189 205.305 245.07 206.016 245.07C206.964 244.833 208.504 244.596 210.637 244.359C212.77 244.122 214.547 243.885 215.969 243.648C220.945 242.701 223.434 240.331 223.434 236.539C223.434 232.984 220.471 222.202 214.547 204.191C208.859 185.944 202.698 169.355 196.062 154.426C195.115 152.056 192.982 150.871 189.664 150.871H103.996C100.204 150.871 97.4792 152.293 95.8203 155.137C87.526 170.54 80.0612 186.536 73.4258 203.125C67.0273 219.477 63.8281 229.667 63.8281 233.695C63.8281 237.961 65.1315 240.805 67.7383 242.227C70.582 243.411 75.4401 244.359 82.3125 245.07C84.4453 245.07 85.9857 245.189 86.9336 245.426C92.1471 245.9 94.7539 248.862 94.7539 254.312C94.7539 259.526 92.1471 262.133 86.9336 262.133C86.2227 262.133 84.0898 261.896 80.5352 261.422C77.2174 261.185 72.4779 260.829 66.3164 260.355C60.3919 260.118 53.875 260 46.7656 260ZM182.199 132.031C184.332 132.031 185.398 131.083 185.398 129.188C185.398 127.292 180.659 115.443 171.18 93.6406C161.938 71.8385 156.013 58.6862 153.406 54.1836C152.458 52.5247 151.155 51.6953 149.496 51.6953C147.363 51.6953 145.112 53.8281 142.742 58.0938C117.859 105.016 105.418 129.069 105.418 130.254C105.418 131.439 106.129 132.031 107.551 132.031H182.199Z'
				fill={fillColor2}
			/>
			<path
				d='M346.781 122.789C346.781 123.737 347.137 124.211 347.848 124.211H348.203C348.44 124.211 349.27 123.5 350.691 122.078C352.35 120.656 354.602 118.879 357.445 116.746C360.289 114.613 363.607 112.48 367.398 110.348C371.19 108.215 375.811 106.438 381.262 105.016C386.712 103.357 392.4 102.527 398.324 102.527H399.035C404.012 102.527 408.87 103.238 413.609 104.66C418.586 105.845 423.799 108.215 429.25 111.77C434.938 115.087 439.677 120.419 443.469 127.766C447.26 135.112 449.63 144.117 450.578 154.781C451.052 158.81 451.289 164.971 451.289 173.266C451.289 174.214 451.289 176.583 451.289 180.375C451.289 183.93 451.171 190.447 450.934 199.926C450.934 209.405 450.934 221.491 450.934 236.184V236.895C450.934 238.079 451.052 239.264 451.289 240.449C451.526 241.397 451.645 242.227 451.645 242.938C451.882 243.411 452.355 244.004 453.066 244.715C453.777 245.189 454.251 245.544 454.488 245.781C454.962 246.018 455.792 246.374 456.977 246.848C458.398 247.085 459.346 247.203 459.82 247.203C460.531 247.203 461.835 247.322 463.73 247.559C465.863 247.796 467.404 248.033 468.352 248.27C471.906 248.743 473.684 250.995 473.684 255.023C473.684 259.763 471.788 262.133 467.996 262.133C467.285 262.133 465.626 261.896 463.02 261.422C460.413 261.185 456.74 260.829 452 260.355C447.497 260.118 442.639 260 437.426 260C434.345 260 431.264 260 428.184 260C425.103 260.237 422.378 260.474 420.008 260.711C417.875 260.948 415.861 261.185 413.965 261.422C412.069 261.659 410.529 261.896 409.344 262.133H407.566C404.249 262.133 402.59 259.763 402.59 255.023C402.59 252.417 403.301 250.758 404.723 250.047C406.145 249.336 409.936 248.507 416.098 247.559C418.23 247.085 420.008 246.729 421.43 246.492C423.799 246.018 425.34 245.307 426.051 244.359C426.999 243.174 427.473 241.042 427.473 237.961V181.441C427.473 163.668 425.814 150.516 422.496 141.984C418.941 133.927 413.609 128.358 406.5 125.277C399.391 121.96 392.637 120.301 386.238 120.301C376.996 120.301 368.702 123.145 361.355 128.832C354.009 134.52 349.862 139.496 348.914 143.762C348.44 145.658 348.203 147.316 348.203 148.738V235.828C348.203 241.99 350.928 245.426 356.379 246.137C367.043 247.796 372.849 249.099 373.797 250.047C375.219 251.232 375.93 253.246 375.93 256.09C375.93 260.355 374.389 262.488 371.309 262.488C371.072 262.488 370.242 262.37 368.82 262.133C367.635 262.133 365.977 262.014 363.844 261.777C361.711 261.54 359.341 261.185 356.734 260.711C354.128 260.474 351.047 260.237 347.492 260C344.174 260 340.857 260 337.539 260C334.221 260 330.904 260 327.586 260C324.268 260.237 321.306 260.474 318.699 260.711C316.329 260.948 314.197 261.185 312.301 261.422C310.405 261.659 308.865 261.777 307.68 261.777C306.495 262.014 305.784 262.133 305.547 262.133C301.518 262.133 299.504 260 299.504 255.734C299.504 252.417 300.215 250.402 301.637 249.691C303.296 248.743 307.324 247.796 313.723 246.848C317.988 246.137 320.595 244.833 321.543 242.938C322.728 241.042 323.32 238.198 323.32 234.406V147.672C323.32 143.406 322.728 140.562 321.543 139.141C320.358 137.482 315.5 133.453 306.969 127.055C305.547 125.633 304.836 124.448 304.836 123.5V123.145C304.836 121.96 305.665 120.893 307.324 119.945C308.983 118.76 314.078 115.917 322.609 111.414C329.245 107.859 334.814 104.897 339.316 102.527C340.738 101.579 341.923 101.105 342.871 101.105C345.715 101.105 347.137 102.883 347.137 106.438V120.656C347.137 120.893 347.018 121.367 346.781 122.078V122.789Z'
				fill={fillColor2}
			/>
			<path
				d='M563.617 120.656C545.607 120.656 531.743 126.107 522.027 137.008C512.311 147.909 507.453 162.72 507.453 181.441C507.453 202.059 514.326 218.41 528.07 230.496C541.815 242.582 556.034 248.625 570.727 248.625C578.073 248.625 585.182 247.203 592.055 244.359C599.164 241.279 603.43 237.487 604.852 232.984C605.799 229.193 606.273 226.467 606.273 224.809V143.051C606.273 139.97 604.97 137.126 602.363 134.52C592.41 125.277 579.495 120.656 563.617 120.656ZM564.328 106.082C571.438 106.082 578.073 106.556 584.234 107.504C590.396 108.215 595.135 109.044 598.453 109.992L603.43 111.414C605.326 111.414 606.273 110.348 606.273 108.215V47.0742C606.273 46.3633 606.155 45.7708 605.918 45.2969C605.918 44.5859 605.799 43.9935 605.562 43.5195C605.562 43.0456 605.326 42.5716 604.852 42.0977C604.615 41.6237 604.378 41.2682 604.141 41.0312C603.904 40.7943 603.311 40.4388 602.363 39.9648C601.652 39.4909 600.941 39.1354 600.23 38.8984C599.757 38.4245 598.809 37.9505 597.387 37.4766C596.202 37.0026 595.017 36.5286 593.832 36.0547C592.884 35.5807 591.462 34.9883 589.566 34.2773C587.671 33.5664 585.893 32.8555 584.234 32.1445C579.732 30.9596 577.48 29.0638 577.48 26.457C577.48 25.0352 578.547 23.6133 580.68 22.1914C611.013 7.4987 626.654 0.152344 627.602 0.152344C630.445 0.152344 631.867 1.8112 631.867 5.12891C631.867 7.4987 631.749 13.7786 631.512 23.9688C631.275 33.9219 631.038 47.7852 630.801 65.5586C630.801 83.0951 630.801 102.29 630.801 123.145C630.801 188.077 631.156 223.742 631.867 230.141C631.867 230.852 631.867 231.444 631.867 231.918C632.104 232.155 632.341 232.51 632.578 232.984C632.815 233.221 633.052 233.458 633.289 233.695C633.763 233.932 634.237 234.169 634.711 234.406C635.422 234.406 636.014 234.525 636.488 234.762C636.962 234.762 637.673 234.762 638.621 234.762C639.806 234.762 640.754 234.762 641.465 234.762C642.413 234.762 643.598 234.88 645.02 235.117C646.441 235.117 647.745 235.117 648.93 235.117C653.669 235.117 656.039 236.895 656.039 240.449C656.039 242.108 655.328 243.411 653.906 244.359C652.721 245.307 649.996 246.729 645.73 248.625C641.702 250.284 637.91 252.18 634.355 254.312C629.616 256.919 625.35 259.526 621.559 262.133C617.767 264.977 615.042 266.991 613.383 268.176C611.724 269.598 610.421 270.309 609.473 270.309C607.577 270.309 606.629 269.005 606.629 266.398V254.668C606.629 253.957 606.273 253.602 605.562 253.602L603.43 255.023C602.245 255.971 600.467 257.156 598.098 258.578C595.728 260 592.884 261.422 589.566 262.844C586.486 264.266 582.457 265.451 577.48 266.398C572.741 267.346 567.764 267.82 562.551 267.82C539.09 267.82 519.895 259.882 504.965 244.004C490.272 227.889 482.926 208.102 482.926 184.641C482.926 163.549 489.68 145.184 503.188 129.543C516.932 113.902 537.194 106.082 563.973 106.082H564.328Z'
				fill={fillColor2}
			/>
			<path
				d='M709.004 122.789C709.241 122.789 711.848 121.13 716.824 117.812C721.801 114.258 727.37 110.466 733.531 106.438C739.693 102.409 744.195 99.9206 747.039 98.9727C749.883 98.0247 753.438 97.5508 757.703 97.5508C764.339 97.5508 770.737 99.0911 776.898 102.172C783.06 105.016 786.141 108.807 786.141 113.547V113.902C786.141 115.324 785.667 116.746 784.719 118.168C783.771 119.59 782.941 120.656 782.23 121.367C781.52 122.078 780.335 123.145 778.676 124.566L776.188 126.699C775.951 126.699 774.647 127.647 772.277 129.543C770.145 131.202 768.249 132.387 766.59 133.098C764.931 133.809 763.154 134.164 761.258 134.164C758.414 134.164 755.096 132.624 751.305 129.543C747.75 126.462 743.84 124.922 739.574 124.922C734.361 124.922 728.792 126.818 722.867 130.609C716.943 134.401 713.151 137.482 711.492 139.852C710.544 141.273 710.07 143.525 710.07 146.605V235.117C710.07 241.99 713.033 245.663 718.957 246.137C721.327 246.374 724.526 246.611 728.555 246.848C735.901 247.322 740.522 248.033 742.418 248.98C744.551 249.691 745.617 251.706 745.617 255.023C745.617 259.763 743.958 262.133 740.641 262.133C740.404 262.133 739.574 262.014 738.152 261.777C736.967 261.777 735.19 261.659 732.82 261.422C730.451 261.185 727.844 260.948 725 260.711C722.156 260.474 718.72 260.237 714.691 260C710.9 260 707.227 260 703.672 260C699.88 260 696.089 260 692.297 260C688.505 260.237 685.069 260.474 681.988 260.711C679.145 260.948 676.538 261.185 674.168 261.422C672.035 261.659 670.258 261.777 668.836 261.777C667.651 262.014 666.94 262.133 666.703 262.133C662.674 262.133 660.66 260.118 660.66 256.09C660.66 253.957 661.134 252.417 662.082 251.469C663.03 250.284 663.978 249.573 664.926 249.336C665.874 248.862 667.651 248.507 670.258 248.27C673.102 247.796 675.353 247.322 677.012 246.848C681.514 245.9 683.766 243.056 683.766 238.316V141.629C683.766 140.207 683.647 139.141 683.41 138.43C683.173 137.482 682.462 136.534 681.277 135.586C680.329 134.401 679.263 133.453 678.078 132.742C677.13 132.031 675.116 130.609 672.035 128.477C668.954 126.344 666.111 124.329 663.504 122.434C662.793 121.723 662.319 120.893 662.082 119.945C662.082 118.997 666.94 116.272 676.656 111.77C685.424 107.504 693.363 103.594 700.473 100.039C700.71 100.039 701.065 99.9206 701.539 99.6836C702.487 99.2096 703.198 98.9727 703.672 98.9727C706.516 98.9727 707.938 101.461 707.938 106.438V121.012C707.938 122.197 708.293 122.789 709.004 122.789Z'
				fill={fillColor2}
			/>
			<path
				d='M794.672 184.996C794.672 160.35 801.189 140.562 814.223 125.633C827.257 110.703 843.134 103.238 861.855 103.238C873.941 103.238 885.553 106.556 896.691 113.191C907.829 119.827 917.072 128.121 924.418 138.074C926.314 140.444 927.262 143.051 927.262 145.895V146.605C927.262 148.738 926.669 150.634 925.484 152.293C924.299 153.952 922.404 155.492 919.797 156.914C917.19 158.099 914.939 159.047 913.043 159.758C911.147 160.469 908.303 161.417 904.512 162.602C900.957 163.786 898.706 164.497 897.758 164.734C848.229 181.797 822.872 190.684 821.688 191.395C820.74 191.868 820.266 192.579 820.266 193.527C820.266 194.949 820.621 197.319 821.332 200.637C822.043 203.954 823.583 208.339 825.953 213.789C828.56 219.24 831.641 224.335 835.195 229.074C838.987 233.577 844.319 237.605 851.191 241.16C858.064 244.478 865.766 246.137 874.297 246.137C890.885 246.137 905.341 240.212 917.664 228.363C920.982 225.046 923.707 223.387 925.84 223.387C929.868 223.387 931.883 225.164 931.883 228.719C931.883 230.141 930.935 232.036 929.039 234.406C921.456 244.359 911.977 252.298 900.602 258.223C889.227 263.91 877.259 266.754 864.699 266.754C856.642 266.754 848.703 265.332 840.883 262.488C833.299 259.645 825.835 255.26 818.488 249.336C811.379 243.411 805.573 234.88 801.07 223.742C796.805 212.604 794.672 199.689 794.672 184.996ZM892.07 147.316C892.07 144.236 887.923 139.496 879.629 133.098C871.335 126.462 862.685 123.145 853.68 123.145C843.016 123.145 834.484 127.766 828.086 137.008C821.924 146.25 818.844 158.928 818.844 175.043C818.844 176.939 819.436 177.887 820.621 177.887C821.095 177.887 832.352 173.621 854.391 165.09C876.667 156.322 888.16 151.819 888.871 151.582C891.004 150.397 892.07 148.975 892.07 147.316Z'
				fill={fillColor2}
			/>
			<path
				d='M1202.75 108.926C1206.3 108.926 1208.08 110.94 1208.08 114.969C1208.08 116.865 1207.73 118.405 1207.02 119.59C1206.54 120.775 1205.83 121.604 1204.88 122.078C1203.93 122.315 1202.99 122.552 1202.04 122.789C1201.33 123.026 1200.26 123.145 1198.84 123.145C1197.65 123.145 1196.94 123.145 1196.71 123.145C1192.44 124.092 1189.36 127.766 1187.46 134.164C1185.81 140.326 1180.71 155.255 1172.18 178.953C1163.65 202.414 1151.09 229.43 1134.5 260C1131.18 266.161 1127.75 269.242 1124.19 269.242C1121.35 269.242 1118.62 267.346 1116.02 263.555C1113.65 259.763 1109.14 251.824 1102.51 239.738C1099.9 234.999 1097.89 231.207 1096.46 228.363C1080.82 198.741 1072.77 183.811 1072.29 183.574C1071.58 183.574 1066.72 193.172 1057.72 212.367C1040.66 246.729 1031.53 264.503 1030.35 265.688C1028.45 268.057 1026.32 269.242 1023.95 269.242C1020.16 269.242 1016.6 266.043 1013.29 259.645C1001.67 237.842 991.128 216.396 981.648 195.305C972.169 174.214 965.06 157.862 960.32 146.25C955.818 134.401 953.448 128.358 953.211 128.121C952.026 125.751 950.367 124.211 948.234 123.5C946.339 122.552 944.561 122.197 942.902 122.434C941.48 122.434 940.177 121.96 938.992 121.012C937.807 119.827 937.215 117.812 937.215 114.969C937.215 110.94 939.466 108.926 943.969 108.926C944.443 108.926 945.746 109.044 947.879 109.281C950.249 109.281 953.448 109.4 957.477 109.637C961.505 109.874 965.889 109.992 970.629 109.992H971.695C976.198 109.992 980.464 109.874 984.492 109.637C988.521 109.4 991.602 109.281 993.734 109.281C996.104 109.044 997.526 108.926 998 108.926C1000.84 108.926 1002.27 110.94 1002.27 114.969C1002.27 119.708 998.474 122.197 990.891 122.434C983.544 122.671 979.871 124.566 979.871 128.121C979.871 130.017 980.582 132.387 982.004 135.23C993.616 165.564 1007.24 196.016 1022.88 226.586C1023.83 228.482 1025.02 229.43 1026.44 229.43C1027.15 229.43 1027.74 229.193 1028.21 228.719C1028.93 228.245 1029.4 227.889 1029.64 227.652C1029.87 227.178 1029.99 226.823 1029.99 226.586C1036.86 216.159 1043.97 203.717 1051.32 189.262C1058.9 174.569 1062.81 165.801 1063.05 162.957V162.602C1063.05 161.417 1061.04 156.44 1057.01 147.672C1052.98 138.667 1050.49 133.453 1049.54 132.031C1047.41 128.951 1044.68 126.818 1041.37 125.633C1038.05 124.211 1034.97 123.618 1032.12 123.855C1029.52 123.855 1027.15 123.5 1025.02 122.789C1023.12 121.841 1022.17 120.064 1022.17 117.457C1022.17 111.77 1024.07 108.926 1027.86 108.926C1028.57 108.926 1030.47 109.044 1033.55 109.281C1036.86 109.281 1041.37 109.4 1047.05 109.637C1052.74 109.874 1058.9 109.992 1065.54 109.992C1072.17 109.992 1078.22 109.874 1083.67 109.637C1089.36 109.4 1093.74 109.281 1096.82 109.281C1100.14 109.044 1102.15 108.926 1102.86 108.926C1106.18 108.926 1107.84 110.703 1107.84 114.258V116.746C1107.84 119.116 1107.25 120.538 1106.06 121.012C1105.11 121.486 1101.56 121.96 1095.4 122.434C1091.84 122.671 1089 122.908 1086.87 123.145C1081.18 123.618 1078.34 126.107 1078.34 130.609C1078.34 134.638 1083.19 146.961 1092.91 167.578C1102.63 188.195 1112.93 207.035 1123.84 224.098C1125.73 227.415 1127.75 229.074 1129.88 229.074C1132.01 229.074 1133.43 228.008 1134.14 225.875C1141.96 212.13 1148.72 197.556 1154.41 182.152C1160.33 166.749 1164.24 155.018 1166.14 146.961C1168.27 138.667 1169.34 133.453 1169.34 131.32C1169.34 130.372 1169.22 129.543 1168.98 128.832C1168.98 127.884 1168.74 127.173 1168.27 126.699C1167.8 126.225 1167.32 125.751 1166.85 125.277C1166.61 124.803 1166.02 124.448 1165.07 124.211C1164.36 123.974 1163.65 123.855 1162.94 123.855C1162.23 123.618 1161.16 123.5 1159.74 123.5C1158.55 123.263 1157.49 123.145 1156.54 123.145C1155.59 122.908 1154.17 122.789 1152.27 122.789C1150.38 122.552 1148.72 122.434 1147.3 122.434C1143.03 121.96 1140.9 119.471 1140.9 114.969C1140.9 110.94 1142.32 108.926 1145.16 108.926C1145.64 108.926 1147.06 109.044 1149.43 109.281C1151.8 109.518 1155.12 109.755 1159.38 109.992C1163.89 110.229 1168.62 110.348 1173.6 110.348C1178.82 110.348 1183.55 110.229 1187.82 109.992C1192.32 109.755 1195.76 109.518 1198.13 109.281C1200.74 109.044 1202.28 108.926 1202.75 108.926Z'
				fill={fillColor2}
			/>
		</svg>
	);
};

const { dark } = ThemeInitProps;
const isTheme = dark ? ' #eaeaea' : ' #151515'
export const ArIcon: SvgIcon = ({
	width = '8.0556vw',
	height = '8.0556vw',
	strokeColor = `${isTheme}`,
	strokeWidth = '2',
	fillColor = 'none',
	fillColor2 = `${isTheme}`,
	rotateCenter = 0
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 65 65'
			fill={fillColor}
			xmlns='http://www.w3.org/2000/svg'
			className={`stroke-current ${strokeColor} antialiased w-svgIcon max-w-svgIcon`}
			transform={`rotate(${rotateCenter}, 65, 65)`}
		>
			<circle
				cx='32.5'
				cy='32.5'
				r='31.5'
				stroke={strokeColor}
				strokeWidth={strokeWidth}
			/>
			<path
				d='M30.116 39H32.816L27.956 26.238H25.076L20.18 39H22.808L23.87 36.084H29.054L30.116 39ZM26.462 28.992L28.226 33.816H24.698L26.462 28.992ZM40.7482 39H43.5202L40.7842 33.78C42.4582 33.294 43.5022 31.944 43.5022 30.162C43.5022 27.948 41.9182 26.238 39.4342 26.238H34.4482V39H36.9502V34.086H38.2462L40.7482 39ZM36.9502 31.944V28.398H38.9662C40.2262 28.398 40.9642 29.1 40.9642 30.18C40.9642 31.224 40.2262 31.944 38.9662 31.944H36.9502Z'
				fill={fillColor2}
			/>
		</svg>
	);
};
