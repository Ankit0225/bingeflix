import React, { useEffect, useState } from 'react'
import './lazyloading.css'
const Lazyloading = () => {
     const [loadsvg , setload] = useState()
    
    useEffect(()=> {
       setTimeout(() => {
           setload('active')
       },400)
    },[])
  return (
    <div className='lazyloading'>
        <svg width="413"   height="92" className={loadsvg} viewBox="0 0 413 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47.0722 19.1162C48.3589 17.7139 49.5542 16.068 50.8884 14.7337C51.3565 14.2657 52.2398 13.2107 52.9443 13.3673C53.8559 13.5699 54.398 14.852 54.7785 15.5708C55.5744 17.0742 56.2047 18.5411 56.9328 20.1872C58.3605 23.415 58.1515 26.4104 58.1515 29.8754C58.1515 33.1399 58.586 36.7035 57.6591 39.896C57.3022 41.1255 57.4868 42.5105 57.4868 43.7861V49.4119C57.4868 50.7253 57.1471 52.4694 56.7728 53.7328C56.5444 54.5037 56.4699 55.2827 56.3296 56.0718C55.9716 58.0854 55.2709 60.289 55.2709 62.3254C55.2709 63.5484 55.4202 64.8624 54.5569 65.8216C53.9781 66.4647 53.0323 67.0309 52.6119 67.7666C52.2671 68.3699 51.584 68.9128 50.95 69.1946C50.234 69.5128 49.7232 70.3884 49.0665 70.7949C47.2521 71.9181 45.9176 73.3814 44.0808 74.4019C42.8582 75.0811 41.0751 74.5744 39.7599 75.1282C37.6116 76.0327 34.7743 75.5529 32.5338 75.953C31.1035 76.2084 29.3882 75.3591 28.0774 74.9558C26.3055 74.4106 24.5001 74.5654 22.7963 73.7987C20.5275 72.7777 18.0418 72.3902 15.7055 71.5336C15.0174 71.2812 13.0322 70.5498 12.7757 69.9086C12.3933 68.9527 11.2649 68.0981 10.6337 67.2865C10.0601 66.549 9.67707 65.567 9.23031 64.7629L9.22527 64.7538C8.74059 63.8814 8.29163 63.0732 7.75307 62.2269C7.26395 61.4583 7.10267 60.2814 6.57128 59.6172C6.35443 59.3461 6.28389 58.3896 6.20197 58.0414C5.93175 56.893 5.41411 55.4295 5.41411 54.2375C5.41411 53.1935 4.79004 52.1316 4.74935 51.0738C4.63841 48.1893 4.91777 44.9697 4.25694 42.1611C3.69561 39.7755 4.30618 37.2496 4.30618 34.8488V31.6358C4.30618 30.4868 3.21503 30.4075 2.87819 29.3338C2.63195 28.5489 2.44316 26.6259 1.64715 26.1577C0.339941 25.3888 1.2668 24.8512 2.20112 24.6435C4.13074 24.2147 5.36602 24.8162 7.08832 25.3083C7.94555 25.5532 7.0125 24.9233 6.97752 24.6435C6.93894 24.3349 7.03842 23.9703 6.9529 23.671C6.88368 23.4287 6.56232 23.6486 6.52204 23.3263C6.48282 23.0126 6.11376 22.754 6.07887 22.44C6.02395 21.9458 5.98927 20.9935 5.74649 20.5565C5.00123 19.215 2.82663 14.9061 5.74649 14.9061C6.68182 14.9061 7.54261 15.4174 8.0239 16.2356C8.31498 16.7304 9.04757 16.8489 9.50114 17.1712C10.3341 17.763 11.7503 19.1162 12.8495 19.1162C13.3823 19.1162 13.8779 18.9957 14.3883 18.8823C15.2976 18.6803 14.8891 18.5592 14.5484 18.1806C14.0551 17.6326 13.9263 15.8198 13.8467 15.103C13.5755 12.662 12.1398 10.229 11.1753 7.93843C10.4524 6.22151 9.47579 4.57887 8.56555 2.94043C8.43253 2.701 7.39786 1.21824 7.53149 1.18006C10.1859 0.421658 11.9572 2.21817 13.8836 3.60519C15.7 4.91299 17.7363 5.90908 19.5587 7.24905C20.7072 8.09357 21.7592 9.06535 22.9686 9.8096C24.651 10.8449 26.2986 13.355 28.459 13.355C28.7835 13.355 29.3579 13.4616 29.7006 13.5901C29.6927 13.5816 29.685 13.573 29.6778 13.5642C29.0337 12.7914 29.6838 10.1293 29.9609 9.19408C30.2774 8.12588 29.742 6.88191 30.1209 5.82105C30.4478 4.90591 31.2527 4.71312 32.226 4.71312C34.5344 4.71312 36.7895 6.05137 38.3812 7.64298C40.1832 9.44507 41.3124 11.9284 43.1329 13.7489C44.3363 14.9522 45.1958 16.5071 46.5183 17.5651C46.8221 17.8082 46.8404 18.2724 47.0722 18.5622C47.486 19.0794 46.7992 18.8432 47.0722 19.1162Z" fill="#720CDA" className="svg-elem-1"></path>
        <path d="M47.0722 19.1162C48.3589 17.7139 49.5542 16.068 50.8884 14.7337C51.3565 14.2657 52.2398 13.2107 52.9443 13.3673C53.8559 13.5699 54.398 14.852 54.7785 15.5708C55.5744 17.0742 56.2047 18.5411 56.9328 20.1872C58.3605 23.415 58.1515 26.4104 58.1515 29.8754C58.1515 33.1399 58.586 36.7035 57.6591 39.896C57.3022 41.1255 57.4868 42.5105 57.4868 43.7861C57.4868 45.6614 57.4868 47.5366 57.4868 49.4119C57.4868 50.7253 57.1471 52.4694 56.7728 53.7328C56.5444 54.5037 56.4699 55.2827 56.3296 56.0718C55.9716 58.0854 55.2709 60.289 55.2709 62.3254C55.2709 63.5484 55.4202 64.8624 54.5569 65.8216C53.9781 66.4647 53.0323 67.0309 52.6119 67.7666C52.2671 68.3699 51.584 68.9128 50.95 69.1946C50.234 69.5128 49.7232 70.3884 49.0665 70.7949C47.2521 71.9181 45.9176 73.3814 44.0808 74.4019C42.8582 75.0811 41.0751 74.5744 39.7599 75.1282C37.6116 76.0327 34.7743 75.5529 32.5338 75.953C31.1035 76.2084 29.3882 75.3591 28.0774 74.9558C26.3055 74.4106 24.5001 74.5654 22.7963 73.7987C20.5275 72.7777 18.0418 72.3902 15.7055 71.5336C15.0174 71.2812 13.0322 70.5498 12.7757 69.9086C12.3933 68.9527 11.2649 68.0981 10.6337 67.2865C10.0601 66.549 9.67707 65.567 9.23031 64.7629C8.7437 63.887 8.2935 63.0762 7.75307 62.2269C7.26395 61.4583 7.10267 60.2814 6.57128 59.6172C6.35443 59.3461 6.28389 58.3896 6.20197 58.0414C5.93175 56.893 5.41411 55.4295 5.41411 54.2375C5.41411 53.1935 4.79004 52.1316 4.74935 51.0738C4.63841 48.1893 4.91777 44.9697 4.25694 42.1611C3.69561 39.7755 4.30618 37.2496 4.30618 34.8488C4.30618 33.7778 4.30618 32.7068 4.30618 31.6358C4.30618 30.4868 3.21503 30.4075 2.87819 29.3338C2.63195 28.5489 2.44316 26.6259 1.64715 26.1577C0.339941 25.3888 1.2668 24.8512 2.20112 24.6435C4.13074 24.2147 5.36602 24.8162 7.08832 25.3083C7.94555 25.5532 7.0125 24.9233 6.97752 24.6435C6.93894 24.3349 7.03842 23.9703 6.9529 23.671C6.88368 23.4287 6.56232 23.6486 6.52204 23.3263C6.48282 23.0126 6.11376 22.754 6.07887 22.44C6.02396 21.9458 5.98927 20.9935 5.74649 20.5565C5.00123 19.215 2.82663 14.9061 5.74649 14.9061C6.68182 14.9061 7.54262 15.4174 8.0239 16.2356C8.31498 16.7304 9.04757 16.8489 9.50114 17.1712C10.3341 17.763 11.7503 19.1162 12.8495 19.1162C13.3823 19.1162 13.8779 18.9957 14.3883 18.8823C15.2976 18.6803 14.8891 18.5592 14.5484 18.1806C14.0551 17.6326 13.9263 15.8198 13.8467 15.103C13.5755 12.662 12.1398 10.229 11.1753 7.93843C10.4524 6.22151 9.4758 4.57887 8.56555 2.94043C8.43253 2.701 7.39786 1.21824 7.53149 1.18006C10.1859 0.421658 11.9572 2.21817 13.8836 3.60519C15.7 4.91299 17.7363 5.90908 19.5587 7.24905C20.7072 8.09357 21.7592 9.06535 22.9686 9.80959C24.651 10.8449 26.2986 13.355 28.459 13.355C28.8131 13.355 29.4652 13.4821 29.7886 13.6258C30.6917 14.0272 29.9437 13.8834 29.6778 13.5642C29.0337 12.7914 29.6838 10.1293 29.9609 9.19408C30.2774 8.12588 29.742 6.88191 30.1209 5.82105C30.4478 4.90591 31.2527 4.71312 32.226 4.71312C34.5344 4.71312 36.7895 6.05137 38.3812 7.64298C40.1832 9.44507 41.3124 11.9284 43.1329 13.7489C44.3363 14.9522 45.1958 16.5071 46.5183 17.5651C46.8221 17.8082 46.8404 18.2724 47.0722 18.5622C47.486 19.0794 46.7992 18.8432 47.0722 19.1162Z" stroke="#720CDA" stroke-linecap="round" className="svg-elem-2"></path>
        <path d="M16.6671 29.2673C13.5502 29.5507 13.8242 31.1323 13.1709 34.1299C13.1709 35.8572 11.6198 37.5521 11.6198 39.3372C11.6198 41.0539 11.2901 42.9273 11.3982 44.766C11.4861 46.2592 12.2846 47.6934 12.2846 49.3085C12.2846 51.0031 12.3813 52.5687 12.7401 54.1834C13.1088 55.8425 12.8957 58.302 14.008 59.6615C14.5752 60.3547 15.0176 61.3298 15.3868 62.1605C15.5395 62.5042 15.9182 62.7145 16.2731 62.7145C17.0044 62.7145 17.5436 63.3267 18.2182 63.5516C19.6387 64.0251 21.1698 64.5721 22.6991 64.4872C24.5429 64.3847 26.5559 63.5921 28.3373 63.3546C31.3546 62.9523 34.2814 61.5639 37.3238 61.385C38.3736 61.3232 40.0236 60.3271 40.9923 59.7107C41.3989 59.452 41.8522 59.0559 42.1987 58.7259C43.0537 57.9117 44.2965 57.4985 45.0547 56.6455C45.9226 55.6691 47.2732 55.1995 48.1323 54.245C49.2916 52.9568 51.0081 52.2269 52.0716 50.8596L52.1011 50.8217C52.9488 49.7319 53.278 49.3088 53.278 47.979C53.278 47.1604 53.2498 45.9486 53.0071 45.1599C52.7553 44.3415 52.9594 43.4232 52.2685 42.8579C51.505 42.2332 50.8488 41.4767 50.1265 40.8267C48.1806 39.0754 45.8106 37.7685 43.7498 36.2965C42.87 35.6681 41.3726 34.7553 40.3029 34.5608C38.6008 34.2513 37.1128 32.9555 35.3295 32.8004C33.1558 32.6114 31.0376 31.5199 28.842 31.2616C28.3415 31.2027 27.9394 31.1458 27.4632 31.04C26.6039 30.849 25.6739 30.9871 24.8042 30.7938C23.8278 30.5768 22.817 29.9756 21.8128 29.9198C20.0994 29.8246 18.4545 29.1048 16.6671 29.2673Z" fill="white" stroke="#720CDA" stroke-linecap="round" className="svg-elem-3"></path>
        <path d="M26.4662 39.8912C25.1212 39.7496 23.8597 39.6696 22.4777 39.6696C21.1596 39.6696 20.9175 39.7621 19.634 40.2113C18.5407 40.5939 18.1466 41.1729 17.652 42.1071C16.7189 43.8696 15.4227 45.1291 15.8178 47.302C16.35 50.2295 17.2518 53.1969 20.3603 54.085C22.115 54.5863 24.4939 54.8591 26.2446 54.1219C27.8712 53.4371 29.8056 52.8351 30.6271 51.1921C31.0243 50.3978 31.5427 49.4339 31.7719 48.6315C32.027 47.739 31.7843 46.4687 31.7843 45.5416C31.7843 43.7393 30.1146 42.5934 28.7929 41.5654C28.1679 41.0793 27.2861 39.9775 26.4662 39.8912Z" fill="black" stroke="#720CDA" stroke-linecap="round" className="svg-elem-4"></path>
        <path d="M74.2533 1.652H73.7533V2.152V69.352V69.852H74.2533H118.605H118.812L118.959 69.7056L129.327 59.3376L129.473 59.1911V58.984V41.416V41.2109L129.329 41.0649L122.858 34.5021L126.355 30.9172L126.497 30.7715V30.568V11.752V11.5449L126.351 11.3984L116.751 1.79844L116.604 1.652H116.397H74.2533ZM134.106 11.56V11.7671L134.252 11.9135L138.668 16.3295L138.815 16.476H139.022H145.742H145.949L146.095 16.3295L150.511 11.9135L150.658 11.7671V11.56V5.416V5.20889L150.511 5.06245L146.095 0.646447L145.949 0.5H145.742H139.022H138.815L138.668 0.646447L134.252 5.06245L134.106 5.20889V5.416V11.56ZM136.046 21.044H135.546V21.544V69.352V69.852H136.046H148.718H149.218V69.352V21.544V21.044H148.718H136.046ZM158.242 21.044H157.742V21.544V69.352V69.852H158.242H170.914H171.414V69.352V41.7176L180.243 32.796H187.887L190.862 35.8589V69.352V69.852H191.362H204.034H204.534V69.352V32.2V31.9929L204.388 31.8464L193.732 21.1904L193.585 21.044H193.378H177.922H177.715L177.568 21.1904L170.454 28.3049V21.544V21.044H169.954H158.242ZM258.827 21.544V21.044H258.327H246.615H246.115V21.544V26.9008L240.144 21.1829L239.999 21.044H239.799H220.983H220.774L220.627 21.1922L210.739 31.1762L210.595 31.3223V31.528V59.368V59.5737L210.739 59.7198L220.627 69.7038L220.774 69.852H220.983H239.031H239.229L239.373 69.716L245.155 64.2699V76.4451L242.179 79.508H227.725L226.187 77.8884V75.208V74.708H225.687H213.015H212.515V75.208V81.736V81.9447L212.663 82.0915L221.591 90.9235L221.737 91.068H221.943H247.959H248.164L248.31 90.9232L258.678 80.6512L258.827 80.5045V80.296V21.544ZM265.345 59.56V59.7657L265.489 59.9118L275.185 69.7038L275.332 69.852H275.541H303.093H303.301L303.448 69.7038L312.952 60.1038L313.097 59.9576V59.752V53.512V53.012H312.597H300.117H299.617V53.512V55.8057L297.025 58.484H281.8L279.017 55.6134V50.172H312.693H313.193V49.672V31.528V31.3209L313.046 31.1744L303.062 21.1904L302.916 21.044H302.709H275.733H275.524L275.377 21.1922L265.489 31.1762L265.345 31.3223V31.528V59.56ZM112.633 26.6169L109.47 29.78H87.5213V13.596H109.566L112.633 16.6631V26.6169ZM115.609 54.0729L111.774 57.908H87.5213V41.244H111.774L115.609 45.0791V54.0729ZM238.935 32.796L245.155 38.3752V50.4285L237.668 58.1H227.625L224.267 54.6527V36.2433L227.625 32.796H238.935ZM296.545 32.412L299.521 35.4749V40.34H279.017V35.4749L281.992 32.412H296.545Z" fill="white" stroke="white" className="svg-elem-5"></path>
        <path d="M317.693 0.5H317.193V1V34.6V35.1H317.693H324.221H324.721V34.6V21.852H339.197H339.697V21.352V15.832V15.332H339.197H324.721V7.02H341.501H342.001V6.52V1V0.5H341.501H317.693ZM344.349 0.5H343.849V1V34.6V35.1H344.349H367.677H368.177V34.6V29.08V28.58H367.677H351.377V1V0.5H350.877H344.349ZM370.495 0.5H369.995V1V34.6V35.1H370.495H377.023H377.523V34.6V1V0.5H377.023H370.495ZM387.398 34.8812L395.049 23.633L402.699 34.8812L402.848 35.1H403.113H410.457H411.404L410.869 34.3179L399.35 17.4637L410.39 1.28178L410.923 0.5H409.977H402.633H402.369L402.221 0.716888L395.049 11.157L387.877 0.716888L387.728 0.5H387.465H380.121H379.168L379.709 1.28404L390.747 17.275L379.226 34.32L378.699 35.1H379.641H386.985H387.249L387.398 34.8812Z" fill="#7733F2" stroke="#7733F2" className="svg-elem-6"></path>
        </svg>   

        </div>
            
  )
}

export default Lazyloading