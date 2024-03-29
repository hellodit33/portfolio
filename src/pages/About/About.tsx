import { useEffect, useState } from "react";
import {
  ArrowContainer,
  ArrowContent,
  Arrows,
  Column,
  ColumnLinks,
  Container,
  Image,
  LinkContainer,
  LinkList,
  Links,
  Paragraph,
  SectionTitle,
  TextContainer,
  Title,
} from "../../components/common/styled";
import * as S from "./styled";
import profilepic from "../../assets/images/elodie.jpg";
import movies from "../../assets/images/movies.png";
import theater from "../../assets/images/theater.png";
import maps from "../../assets/images/maps.png";
import computer from "../../assets/images/computer.png";
import tomat from "../../assets/images/tomat.png";
import book from "../../assets/images/book.png";
import ReactFlipCard from "reactjs-flip-card";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "animate.css";
import light from "../../assets/images/light.png";
import click from "../../assets/images/click.png";
import computer3d from "../../assets/images/computer3d.png";
import folder from "../../assets/images/folder.png";
import stars from "../../assets/images/stars.png";
import booky from "../../assets/images/booky.png";
import colors from "../../theme/colors";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleArrowClick = () => {
    const nextSlide = document.getElementById("next-slide");
    if(nextSlide !== null) {
    nextSlide.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <S.ScrollContainer>
      <S.FullSection style={{ backgroundColor: colors.green_highlight }}>
        <Container>
          <TextContainer>
            <Column>
              <Title className="animate__animated animate__backInUp">
                Hi 👋{" "}
              </Title>
              <Title className="animate__animated animate__backInDown">
                I'm Élodie
              </Title>
              <Paragraph>
                I'm a Front-end developer with a background in journalism. I'm
                currently working at Multisoft, further developing 
                the low-code platform Softadmin.
              </Paragraph>
              <Paragraph>
                Efficient, creative and passionate about film and
                sustainability, I love tech that improves the world.
              </Paragraph>
              <S.Linkedin className="animate__animated animate__backInLeft">
                <S.Link
                  href="https://www.linkedin.com/in/elodie-pradet/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  👩🏻‍💻 {"  "}https://www.linkedin.com/in/elodie-pradet/
                </S.Link>
              </S.Linkedin>
            </Column>
            <ColumnLinks>
              <div>
                <Image src={profilepic} />
                <S.WorkTag>
                  <S.Link href="mailto:pradetelodie@gmail.com">
                    {" "}
                    Get in touch!{" "}
                  </S.Link>
                </S.WorkTag>
              </div>
              <LinkContainer column>
                <LinkList>
                  <Links
                    href="https://www.linkedin.com/in/elodie-pradet"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Links>
                </LinkList>
                <LinkList>
                  <Links
                    href="https://github.com/hellodit33"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaGithub />
                  </Links>
                </LinkList>
              </LinkContainer>
            </ColumnLinks>
          </TextContainer>
        </Container>
        <ArrowContainer onClick={handleArrowClick}>
          <ArrowContent>
            <Arrows>
              <svg viewBox="0 0 60 48">
                <polygon
                  className="arrow-top"
                  points="28.2,18.6 1.1,1.1 1.6,0 28.2,16.9 54.8,0 55.4,1.1"
                />
                <polygon
                  className="arrow-middle"
                  points="28.2,28.9 0.7,12.2 2.2,10.6 28.2,24.6 54.1,10.6 55.6,12.2"
                />
                <polygon
                  className="arrow-bottom"
                  points="28.2,39.3 0,22.3 3,20.1 28.2,34.3 54.3,20.1 57.3,22.3"
                />
              </svg>
            </Arrows>
          </ArrowContent>
        </ArrowContainer>
      </S.FullSection>
      <S.FullSection id="next-slide" style={{ backgroundColor: colors.yellow_highlight }}>
        <S.SecondContainer>
          <SectionTitle>WORK EXPERIENCE</SectionTitle>
          <S.WorkContainer>
            <S.WorkParagraph>
              <S.BoxTitle>✍️ First: Journalism</S.BoxTitle>I first worked as a
              journalist in Swedish media after my journalism studies, between
              2017 and 2021. I mostly worked on social and political issues, as
              well as on cultural subjects. I wrote an investigation piece on
              the culture of honor. Later on I wrote reportages from Algeria
              during the revolution, and from France during the Yellow Vests
              protests.
            </S.WorkParagraph>
            <S.WorkParagraph>
              <S.BoxTitle>💡 Then: Startup Journeys</S.BoxTitle>
              After that I worked as an Editorial and Marketing Manager for the
              film recommendation startup Hint in Stockholm where I used my
              knowledge in film and journalism. Later on I also worked with
              front-end development (JavaScript, Flutter, Firebase) and UX
              (Figma) at the same startup (2021-2022). After that, I worked as a Software Developer 
              for Redmind, a technology and venture studio, and specifically for the client Moveat's app, dashboard and website (React, React Native, TypeScript, NodeJS, Firebase, 2022-2023).
            </S.WorkParagraph>
            <S.WorkParagraph>
              <S.BoxTitle>👩🏻‍💻 Now: Front-end Developer</S.BoxTitle>
              Nowadays, since May 2023, I work as a Front-end Developer at Multisoft,
              where I work in the R&D team, further developing the low-code platform
              Softadmin, one of the most effective on the market based on standard components with great flexibility and scalability.
              In my everyday work I use TypeScript, LESS, C# and T-SQL.
            </S.WorkParagraph>
            <S.WorkParagraph>
              <S.BoxTitle>🚀 Building Up Great Ideas</S.BoxTitle>
              What I love the most in Software Development is to make impactful
              ideas come alive, through websites and apps. I enjoy that I can
              see the results of my job more or less right away. A great day at
              work is when I've changed something to make it more efficient and
              user-friendly.
            </S.WorkParagraph>
          </S.WorkContainer>
        </S.SecondContainer>
      </S.FullSection>

      <S.FullSection style={{ backgroundColor: colors.purple_dark }}>
        <S.ThirdContainer>
          <SectionTitle style={{ color: "white" }}>STUDIES</SectionTitle>
          <S.Message>
           Move your mouse over each card to read more.
          </S.Message>
          <S.StudiesImage style={{ top: "400px", left: "25px" }} src={light} />
          <S.StudiesImage style={{ top: "650px", left: "50px" }} src={stars} />
          <S.StudiesImage
            style={{ bottom: "100px", right: "50px" }}
            src={click}
          />
          <S.StudiesImage
            style={{ top: "60px", right: "50px" }}
            src={computer3d}
          />
          <S.StudiesImage style={{ top: "60px", left: "20px" }} src={folder} />
          <S.StudiesImage
            style={{
              top: isMobile ? "366px" : "300px",
              right: isMobile ? "19px" : "90px",
            }}
            src={booky}
          />

          <S.StudiesContainer>
            <S.StudiesParagraph>
              🎓 I have four bachelor degrees: in Political Science, Sociology,
              Journalism & Film Studies. My goal was at first to become a
              journalist, so I started with Political Science & Sociology to get
              a solid knowledge ground before studying journalism. After a few
              years in journalism, I changed direction and decided to study Film
              - the subject I'm most passionate about.
            </S.StudiesParagraph>
            <S.StudiesParagraph>
              👩🏻‍💻 Between 2021 and 2023 I studied Front-End development at the professional
              school KYH in Stockholm. I had found
              out about Front-end during my journalism studies, and enjoyed the
              building, design and logic process behind it.
            </S.StudiesParagraph>
            <S.StudiesParagraph>
              🇫🇷 🇸🇪 🇬🇧 🇮🇹 🇩🇪 Besides coding languages, I've also studied human
              languages. My mother tongue is French and I speak fluent English.
              I also became fluent in Swedish 2014, and I have a limited working
              proficiency in Italian and German. I'm comfortable understanding
              Norwegian and Danish after two summer jobs in 'Scandinavian' in
              Norway and Iceland. I've even studied Icelandic and Arabic.
            </S.StudiesParagraph>
            <S.StudiesParagraph>
              🌱 I have also a deep interest for sustainability. I'm engaged
              against climate change, and I've studied Climate change and
              Geology, as well as Innovation & Sustainability, and Rhetoric and
              Climate Transition. To me, this is the most important issue the world has to face.
            </S.StudiesParagraph>
          </S.StudiesContainer>
        </S.ThirdContainer>
      </S.FullSection>

      <S.FullSection style={{ backgroundColor: colors.green }}>
        <S.FourthContainer>
          <SectionTitle>Leisure time</SectionTitle>

          <div>
            Click on each card to get to know what I do on my free time.
          </div>

          <S.Grid>
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={<S.LeisureImage src={movies} />}
              backComponent={
                <S.LeisureText>
                  When I have free time I watch films, and I continue writing on
                  a scenario.
                </S.LeisureText>
              }
            />
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={<S.LeisureImage src={theater} />}
              backComponent={
                <S.LeisureText>
                  I play theater every week with a French-speaking Theater
                  organization. We regularly have public representations.
                </S.LeisureText>
              }
            />
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={<S.LeisureImage src={computer} />}
              backComponent={
                <S.LeisureText>
                  I do some front-end development to help friends with their
                  projects, and to work on some startup ideas I have.
                </S.LeisureText>
              }
            />
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={<S.LeisureImage src={tomat} />}
              backComponent={
                <S.LeisureText>
                  I do a lot of organic growing (vegetables and flowers) in a
                  shared garden as soon as the weather permits it in Stockholm.
                </S.LeisureText>
              }
            />
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={<S.LeisureImage src={book} />}
              backComponent={
                <S.LeisureText>
                  I'm often busy reading books, and I also discuss literature
                  with two bookclubs. I often go to the theater and opera.
                </S.LeisureText>
              }
            />
            <ReactFlipCard
              flipTrigger="onClick"
              frontComponent={<S.LeisureImage src={maps} />}
              backComponent={
                <S.LeisureText>
                  From time to time I travel abroad by train, often to France
                  and Italy.
                </S.LeisureText>
              }
            />
          </S.Grid>
        </S.FourthContainer>
      </S.FullSection>
    </S.ScrollContainer>
  );
};

export default About;
