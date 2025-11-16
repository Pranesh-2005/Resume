import React from 'react';
import * as Styled from './Resume.styles';
import TextList from '../TextList/TextList';

import {
  keyTechSkills,
  otherSkills,
  professionalExperience,
} from './Resume.config';
import {
  FiDownload,
  FiGithub,
  FiGlobe,
  FiMail,
  FiPhoneOutgoing,
} from 'react-icons/fi';
import { SiLinkedin } from 'react-icons/si';
import PortfolioParagraph from '../Typography/PortfolioParagraph/PortfolioParagraph';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import Link from 'next/link';

/**
 *Renders resume component
 *@function Resume
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Resume = (): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.ResumeWrapper>
        <Styled.LeftColumn>
          <Styled.ContactInfo>
            <Styled.ContactLink
              href={'https://praneshjs.vercel.app/'}
              target="_blank"
              rel="noopener"
            >
              <FiGlobe />
              pranesh.dev
            </Styled.ContactLink>

            <Styled.ContactLink href="mailto: praneshmadhan646@gmail.com">
              <FiMail />
              hello@pranesh.dev
            </Styled.ContactLink>
            <p>Punjai Puliampatti, TN, India</p>
          </Styled.ContactInfo>

          <TextList
            variant={'withHeader'}
            textBulletPoints={keyTechSkills}
            headerText={'key technical skills'}
          />

          <TextList
            variant={'withHeader'}
            textBulletPoints={otherSkills}
            headerText={'AIML and Other skills'}
          />
        </Styled.LeftColumn>

        <Styled.RightColumn>
          {/*HEADER WITH NAME*/}
          <Styled.SummaryHeader>
            <Styled.Name>
              <span>Pranesh</span>, B.Tech
            </Styled.Name>
            <Styled.Title>
              AIML Engineer
            </Styled.Title>

            {/*SOCIAL MEDIA LINKS*/}
            <Styled.SocialLinksWrapper>
              <Styled.SocialMediaLink
                href={'https://www.linkedin.com/in/pranesh5264/'}
                target={'_blank'}
                rel="noopener"
              >
                <SiLinkedin className={'social-media-icon'} />
                Linkedin
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink
                href={'https://github.com/Pranesh-2005'}
                target={'_blank'}
                rel="noopener"
              >
                <FiGithub className={'social-media-icon'} />
                GitHub
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="mailto: praneshmadhan646@gmail.com">
                <FiMail className={'social-media-icon'} />
                Email
              </Styled.SocialMediaLink>
              <Styled.SocialMediaLink href="tel:+916374064016 ">
                <FiPhoneOutgoing className={'social-media-icon'} />
                +91 63740 64016
              </Styled.SocialMediaLink>

              <Styled.SocialMediaLink
                href={'/assets/resume.pdf'}
                download="resume.pdf"
              >
                <FiDownload className={'social-media-icon'} />
                Download CV
              </Styled.SocialMediaLink>
            </Styled.SocialLinksWrapper>

            <Styled.HR />
            {/*SUMMARY*/}
            <Styled.Summary>
              <Styled.ResumeHeader>Summary</Styled.ResumeHeader>
              <PortfolioParagraph
                margin={'0'}
                paragraphText={`Passionate B. Tech Final year
                student specializing in Artificial
                Intelligence and Machine
                Learning at Bannari Amman
                Institute of Technology. Proficient
                in C, Java, Python (Basics), SQL,
                and experienced in Machine
                Learning and CS Fundamentals.
                Successfully completed projects
                including a Day-to-Day
                Automation MCP servers, AI
                Generated Video Detection using
                EfficientNetV2 and MTCNN, and
                Emotion Detection in Text using
                BERT Model`}
                withDarkColor={true}
                variant={'medium'}
                withAnimatedPresence={false}
              />
            </Styled.Summary>
          </Styled.SummaryHeader>

          {/*PROJECTS*/}

          <Styled.ResumeHeader>Projects</Styled.ResumeHeader>
          <PortfolioParagraph
            margin={'0'}
            paragraphText={
              'I’ve worked on a handful of projects over the past years:'
            }
            withDarkColor={true}
            variant={'medium'}
            withAnimatedPresence={false}
          />

          {professionalExperience.map((experience, id) => (
            <ProfessionalExperience key={id} {...experience} />
          ))}
          {/*PROJECTS*/}
          <Styled.ResumeHeader>Highlighted Projects</Styled.ResumeHeader>

          <Styled.Projects>
            <p>
              Links to some of my projects and work can be found on{' '}
              <Link href={'https://praneshjs.vercel.app/#projects'}>
                pranesh.dev/portfolio/projects
              </Link>{' '}
              and details can be provided upon request via a scheduled demo
              call.
            </p>
          </Styled.Projects>

          {/* EDUCATION */}
          <Styled.ResumeHeader>Education</Styled.ResumeHeader>

          <Styled.EducationDetails>
            <h4>
              B.Tech
              <span>Artificial Intelligence and Machine Learning</span>
            </h4>
            <Styled.University>
              Bannari Amman Institute of Technology
            </Styled.University>
          </Styled.EducationDetails>

          {/* <Styled.EducationDetails>
            <h4>
              Master of Computer Engineering
              <span>Advanced Computer Networks</span>
            </h4>
            <Styled.University>
              Chernivtsi National University
            </Styled.University>
          </Styled.EducationDetails>

          <Styled.EducationDetails>
            <h4>
              Bachelor of Computer Engineering
              <span>Computer Networking</span>
            </h4>
            <Styled.University>
              Chernivtsi National University
            </Styled.University>
          </Styled.EducationDetails> */}
        </Styled.RightColumn>
      </Styled.ResumeWrapper>
    </Styled.Container>
  );
};

export default Resume;