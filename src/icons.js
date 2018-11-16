import React from 'react'

export default {
    play: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M85.6546266,43.3010116 L22.6442273,1.3643244 C17.2704307,-2.21820666 10,1.68043009 10,8.10791229 L10,91.875918 C10,98.4087688 17.2704307,102.202037 22.6442273,98.6195059 L85.6546266,56.6828188 C90.3962118,53.6271305 90.3962118,46.4620684 85.6546266,43.3010116 Z"
                fill={'currentColor'}/>
        </svg>
    ),
    pause: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M87.6321768,0 C89.8469696,0 91.6398971,1.78759201 91.6398971,4.10094637 L91.6398971,95.8990536 C91.6398971,98.212408 89.7415033,100 87.5267105,100 L64.1131866,100 C61.7929275,100 60,98.1072555 60,95.8990536 L60,4.10094637 C60,1.78759201 61.8983938,0 64.1131866,0 L87.6321768,0 Z M36.6321768,0 C38.8469696,0 40.6398971,1.78759201 40.6398971,4.10094637 L40.6398971,95.8990536 C40.6398971,98.212408 38.7415033,100 36.5267105,100 L13.1131866,100 C10.7929275,100 9,98.1072555 9,95.8990536 L9,4.10094637 C9,1.78759201 10.8983938,0 13.1131866,0 L36.6321768,0 Z"
                fill={'currentColor'}/>
        </svg>
    ),
    close: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="currentColor">
                    <path
                        d="M0.0392772977,6.67714061 L6.71641791,0 L100,93.2835821 L93.3228594,99.9607227 L0.0392772977,6.67714061 Z M93.2835821,0 L99.9607227,6.67714061 L6.67714061,99.9607227 L0,93.2835821 L93.2835821,0 Z"/>
                </g>
            </g>
        </svg>
    ),
    arrowLeft: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="currentColor">
                    <polygon
                        points="77.5049679 4.48674387 73.018224 0 23 50.018224 72.9426972 100 77.4311954 95.5150112 31.9717334 50.0199783"/>
                </g>
            </g>
        </svg>
    ),
    arrowRight: (props) => (
        <svg {...props} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="currentColor">
                    <polygon
                        points="22.7475161 4.7392278 27.2342599 0.252483926 77.2524839 50.2707079 27.3097867 100.252484 22.8212885 95.7674951 68.2807505 50.2724623"/>
                </g>
            </g>
        </svg>
    )
}