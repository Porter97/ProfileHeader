import Icon from "@material-ui/core/Icon";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from '@material-ui/core/IconButton';
import { loadCSS } from 'fg-loadcss';
import React from "react";


export default function SocialIcon(props) {

	function renderIcon(account) {
        switch (account) {
            case 'medium':
                return <Icon style={{color: '#03A87C'}} className="fab fa-medium-m"/>;
            case 'instagram':
                return <Icon style={{color: '#845EC2'}} className="fab fa-instagram"/>;
            case 'twitter':
                return <Icon style={{color: '#55acee'}} className="fab fa-twitter"/>;
            case 'facebook':
                return <Icon style={{color: '#4267B2'}} className="fab fa-facebook"/>;
            case 'tiktok':
                return <SvgIcon>
                    <path
                        d="M21.1299 9.84202C19.0656 9.84696 17.0519 9.20321 15.3734 8.00171V16.3813C15.3728 17.9333 14.8984 19.4482 14.0136 20.7233C13.1289 21.9984 11.8759 22.973 10.4222 23.5168C8.96855 24.0606 7.38351 24.1477 5.87903 23.7664C4.37454 23.3851 3.02234 22.5536 2.00321 21.383C0.984087 20.2125 0.346622 18.7587 0.176055 17.2161C0.0054878 15.6735 0.309949 14.1156 1.04873 12.7507C1.78751 11.3858 2.92539 10.279 4.31022 9.57823C5.69505 8.87746 7.26083 8.61616 8.79818 8.82927V13.0439C8.09469 12.8227 7.33926 12.8293 6.63978 13.063C5.9403 13.2966 5.33253 13.7453 4.90328 14.345C4.47403 14.9446 4.24524 15.6646 4.24958 16.402C4.25393 17.1395 4.49118 17.8567 4.92747 18.4512C5.36376 19.0458 5.97676 19.4873 6.67895 19.7127C7.38113 19.9381 8.13659 19.9359 8.83743 19.7063C9.53827 19.4768 10.1487 19.0316 10.5814 18.4345C11.0142 17.8374 11.2472 17.1188 11.2472 16.3813V0H15.3734C15.3705 0.348435 15.3997 0.696395 15.4606 1.03948C15.604 1.80537 15.9021 2.53396 16.3367 3.18068C16.7714 3.8274 17.3334 4.37867 17.9883 4.80075C18.9202 5.41688 20.0127 5.74528 21.1299 5.74505V9.84202Z"
                        fill="black"/>
                </SvgIcon>;
        }
    }


	React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

	return (
			<IconButton style={{padding: '8px'}} href={props.url} target='_blank'>
				{renderIcon(props.social_name)}
			</IconButton>
	);
	}
