import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CustomTimeline, {CustomTimelineSeparator} from '../../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import resumeData from '../../utils/resumeData';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

import './Resume.css';

const Resume = () => {
    return (
        <>
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='about_me_text'>{resumeData.about}</Typography>
                </Grid>
            </Grid>

            <Grid container className='section'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Experience' icon={<WorkIcon />}>
                                {resumeData.experiences.map((experience, i) => (
                                    <TimelineItem key={i}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent  className='timeline_content'>
                                            <Typography className='timeline_title'>{experience.title}</Typography>
                                            <Typography variant='caption' className='timeline_subtitle'>{experience.subtitle}</Typography><br />
                                            <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>))}
                            </CustomTimeline>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Education' icon={<SchoolIcon />}>
                                {resumeData.educations.map((education, i) => (
                                    <TimelineItem key={i}>
                                        <CustomTimelineSeparator />
                                        <TimelineContent  className='timeline_content'>
                                            <Typography className='timeline_title'>{education.title}</Typography>
                                            <Typography variant='caption' className='timeline_subtitle'>{education.subtitle}</Typography><br/>
                                            <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Resume
