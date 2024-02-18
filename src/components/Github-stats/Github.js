import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import {Center, Image, SimpleGrid} from "@chakra-ui/react";
import "./style.css"
export const Github = () => {
  return (
    <div id="Github" className="git">
      <h1
        className="SectionTitle"
        style={{ "margin-top": "72px", "margin-bottom": "0.5rem" }}
      >
        Github
      </h1>
      <div className="github">
        <Center>
          <GitHubCalendar username="RohanKansara01" />
        </Center>
        <SimpleGrid
          w={"95%"}
          margin="auto"
          alignItems="center"
          columns={[3]}
          gap="15px"
          marginTop={"40px"}
        >
          <Center>
            <Image id="github-stats-card" src="https://github-readme-streak-stats.herokuapp.com?user=RohanKansara01&theme=dark" />
          </Center>
          <Center>
            <Image id="github-streak-stats" src="https://github-readme-stats.vercel.app/api/top-langs?username=RohanKansara01&show_icons=true&locale=en&layout=compact&theme=react&hide_border=true&bg_color=0D1117" />
          </Center>
          <Center>
            <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api?username=RohanKansara01&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117" />
          </Center>
        </SimpleGrid>
      </div>
    </div>
  );
}