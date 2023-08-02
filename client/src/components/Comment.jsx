import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.div`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png"></Avatar>
      <Details>
        <Name>
          Lord Admin <Date>1 Day ago</Date>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptate veritatis deserunt esse repellat debitis aliquid quis illo
            totam. Veritatis, ipsa. Quas aliquam esse explicabo ex odit culpa
            tenetur cupiditate!
          </Text>
        </Name>
      </Details>
    </Container>
  );
};

export default Comment;
