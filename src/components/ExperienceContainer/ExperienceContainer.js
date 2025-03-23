import React from 'react'
import WorkIcon from '@material-ui/icons/Work'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    
    <VerticalTimeline
      lineColor='#bdbddd'
      >
        <VerticalTimelineElement
          key={experience.company}
          date={experience.date}
          dateClassName="date"
          contentArrowStyle={{ borderRight: '7px solid #bdbddd' }}
          iconStyle={{ background: '#23283e', boxShadow: '0 0 0 4px #bdbddd, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)'} }
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title vertical-timeline-element'>
            {experience.role}
            </h3>
          <h6 className='vertical-timeline-element-subtitle vertical-timeline-element'>
            {experience.company}
          </h6>
          <p id='description'>
            {experience.description}
          </p>
          <p className='experience__stack'>
            {experience.stack}
          </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
)

export default ExperienceContainer
