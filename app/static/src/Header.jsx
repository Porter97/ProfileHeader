import React, { useState, useEffect } from 'react';

import Container from "@material-ui/core/Container"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

import makeStyles from "@material-ui/core/styles/makeStyles"

import SocialIcon from './SocialIcons';
import { Data } from './data';

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        padding: theme.spacing(12, 0, 2, 0),
        textAlign: 'center',
		flexGrow: 1,
		[theme.breakpoints.up(769)]: {
			padding: theme.spacing(18, 12, 4, 12),
		},
		[theme.breakpoints.up(376)]: {
			padding: theme.spacing(16, 4, 6, 4)
		},
        height: 1080
    },
    profileImage: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        margin: '0 auto',
    },
    username: {
        color: '#979797',
        margin: '-4px 0',
        paddingBottom: '8px',
    },
    bio: {
    	fontWeight: 600,
		[theme.breakpoints.down(600)]: {
			color: '#979797'
		}
    },
    smallProfileImage: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    root: {
        flexGrow: 1,
    },
    title: {
          flexGrow: 1,
          marginLeft: theme.spacing(2),
          color: '#282828'
    },
    socialAccordion: {
    	boxShadow: 'none',
		margin: 0,
		backgroundColor: 'transparent !important',
		'&::before': {
			backgroundColor: 'transparent !important',
		},
	},
	socialAccordionExpanded: {
    	maxHeight: 24,
	},
	accordionSummary: {
    	padding: '0px',
		maxWidth: '0px',
		margin: '0 auto',
	},
	accordionSummaryContent: {
    	margin: 0
	},
	accordionDetails: {
    	padding: '0 16px',
		margin: '0 auto',
		maxWidth: '235px'
	},
}));

export default function Header() {

    const [small, setSmall] = useState(false);

    const classes = useStyles();

    function handleScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 250;

        if (distanceY > shrinkOn) {
            setSmall(true)
        } else {
            setSmall(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    });

    return (
        <div>
            <div className={classes.root}>
                <Fade in={small}>
                    <AppBar position="fixed" style={{visibility: !small ? "hidden" : "visible", backgroundColor: '#fff'}}>
                        <Toolbar>
                            <Slide direction="left" in={small} timeout={250}>
                                <div>
                                <Fade in={small} timeout={500}>
                                    <Avatar
                                        className={classes.smallProfileImage}
                                        alt='None'
                                        src={encodeURI(Data.image)}
                                    />
                                </Fade>
                                </div>
                            </Slide>
                            <Slide direction="left" in={small} timeout={250}>
                                <div>
                                <Fade in={small} timeout={500}>
                                    <Typography variant="body1" className={classes.title}>
                                        {Data.name}
                                    </Typography>
                                </Fade>
                                </div>
                            </Slide>
                            <div style={{margin: '0 0 0 auto', display: 'inline-flex'}}>
                            {Data.social.slice(0, 4).map((social, index) =>  (
                                <Slide id={social.id} direction="left" in={small} timeout={350 + (50*index)}>
                                    <div id={social.id}>
                                        <Fade id={social.id} in={small} timeout={500 + (75*index)}>
                                            <SocialIcon
                                                key={social.id}
                                                social_name={social.social_name}
                                                url={social.url}
                                            />
                                        </Fade>
                                    </div>
                                </Slide>
                            ))}
                            </div>
                        </Toolbar>
                    </AppBar>
                </Fade>
            </div>
            <Container maxWidth='sm' className={classes.headerContainer} style={{visibility: small ? 'hidden' : 'visible'}}>
                <div className={classes.headerDiv}>
                    <Avatar
                        className={classes.profileImage}
                        alt='None'
                        src={encodeURI(Data.image)}
                    />
                    <div className={classes.profileText}>
                        <Typography className={classes.name} component='h1' variant="h6">
                            {Data.name}
                        </Typography>
                        <Typography className={classes.username} variant="subtitle2">
                            @{Data.username}
                        </Typography>
                        {(Data.social.length < 5) ?
							Data.social.map((social, index) => (
								<SocialIcon
									key={social.id}
									social_name={social.social_name}
									url={social.url}
								/>
							))
							:
							<Accordion className={classes.socialAccordion}>
								<AccordionSummary
									classes={{root: classes.accordionSummary,
										      expanded: classes.socialAccordionExpanded,
									   		  content: classes.accordionSummaryContent}}
									expandIcon={<ExpandMoreIcon />}
									aria-controls="social-panel-content"
									id="social-panel-header"
									>
									{ Data.social.slice(0, 4).map((social, index) => (
										<SocialIcon
											key={social.id}
											social_name={social.social_name}
											url={social.url}
										/>))
									}
								</AccordionSummary>
								<AccordionDetails className={classes.accordionDetails}>
									{ Data.social.slice(4).map((social, index) => (
										<SocialIcon
											key={social.id}
											social_name={social.social_name}
											url={social.url}
										/>))
									}
								</AccordionDetails>
							</Accordion>
						}
                        <Typography className={classes.bio} variant="body2">
                            {Data.bio}
                        </Typography>
                    </div>
                </div>
            </Container>
        </div>
    )

}