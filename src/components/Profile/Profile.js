import { Typography } from '@material-ui/core'
import React from 'react';
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import resumeData from '../../utils/resumeData';
import './Profile.css'
import dp from '../../assets/images/dp.jpg';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className="timeline_content">
            {link ? (
            <Typography className="timelineItem_text">
                <span>{title}:</span>{" "}
                <a href={link} target='_blank' rel="noreferrer noopener">
                    {text}
                </a>
            </Typography>
            ) : 
            (
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{" "}
                    {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>
            <figure className='profile_image'>
                <img src={dp} alt="" />
            </figure>
            <div className='profile_info'>
                <CustomTimeline icon={<PersonOutlineIcon />}> 
                    <CustomTimelineItem title='Name' text={resumeData.name}/>
                    <CustomTimelineItem title='Title' text={resumeData.title}/>
                    <CustomTimelineItem title='Email' text={resumeData.email}/>

                    {Object.keys(resumeData.socials).map((key, i) => (
                        <CustomTimelineItem key={i} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                    ))}
                </CustomTimeline>
            </div>
        </div>
    )
}

export default Profile
