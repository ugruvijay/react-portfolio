import React, { useState } from 'react';
import { Grid, Tabs, Tab, Typography, CardActionArea, Card, CardMedia, CardContent, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

import resumeData from '../../utils/resumeData';

import './Portfolio.css';

const Portfolio = () => {
    const [tabValue,  setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <Grid container spacing={1} className='section pb_45'>
            <Grid item className='section_title mb_20'>
                <span></span>
                <h6 className='section_title_text'>Portfolio</h6>
            </Grid>

            <Grid item xs={12}>
                <Tabs TabIndicatorProps={{style: {background:'white'}}} value={tabValue} className='custom_tabs' onChange={(event,newValue) => setTabValue(newValue)}>
                    <Tab label='All' value='All' className={tabValue === 'All' ? 'custom_tabs_item active' : 'custom_tabs_item'}></Tab>
                    {[...new Set(resumeData.projects.map(item => item.tag))].map((tag, i) => (
                        <Tab key={i} label={tag} value={tag} className={tabValue === tag ? 'custom_tabs_item active': 'custom_tabs_item'} />
                    ))}
                </Tabs>
            </Grid>

            <Grid item xs={12}>
                <Grid container spacing={3} >
                    {resumeData.projects.map((project, i) => (
                        <React.Fragment key={i}>
                            {tabValue === project.tag || tabValue === 'All' ? (
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <Grow  in timeout={1000}>
                                        <Card className='custom_card' onClick={() => setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia className='custom_card_image' image={project.image} title={project.title}></CardMedia>
                                                <CardContent>
                                                    <Typography variant={'body2'} className='custom_card_title'>{project.title}</Typography>
                                                    <Typography variant={'body2'} className='custom_card_caption'>{project.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                        </React.Fragment>
                    ))}

                </Grid>
            </Grid>
            <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className='project_dialog' >
                <DialogTitle onClose={() => setProjectDialog(false)}>
                    {projectDialog.title}
                </DialogTitle>
                <img src={projectDialog.image} alt='' className='project_dialog_image'/>
                <DialogContent >
                    <Typography className='project_dialog_description'>{projectDialog.description}</Typography>
                    
                </DialogContent>
                <DialogActions className='project_dialog_actions'>
                    {projectDialog?.links?.map((link, i) => (
                        <a key={i} className='project_dialog_icon' href={link.link} target='_blank' rel="noreferrer noopener">{link.icon}</a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Portfolio
