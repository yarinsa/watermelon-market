import React from "react";
import { Card, Elevation, Colors } from "@blueprintjs/core";
import styled from "styled-components/macro";
import moment from "moment";
import { mediaQueries } from "../theme";
interface newsArticle {
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export const NewsCard: React.FC<newsArticle> = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => {
  return (
    <Root interactive={true} elevation={Elevation.TWO}>
      <ArticleImage src={urlToImage} />
      <Content>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleInfo>
          {source.toUpperCase() + " - "}
          {author.split(" ").splice(-2).join(" ")}
        </ArticleInfo>
        <ArticleSource>
          {moment(publishedAt).format("MM-DD-YY").split("-").join(".")}
        </ArticleSource>
        <ArticleDescription>{description}</ArticleDescription>
        <ReadMore href={url}>Read More</ReadMore>
      </Content>
    </Root>
  );
};

const Root = styled(Card)`
  padding: 0 !important;
  display: flex;
  margin-bottom: 30px;
  height: 280px;
  @media (max-width: ${mediaQueries.phone}) {
    flex-direction: column;
  }
`;

const ArticleImage = styled.img`
  max-width: 340px;

  border-radius: 18px 0 0 18px;
  object-fit: cover;
  @media (max-width: ${mediaQueries.phone}) {
    border-radius: 18px 18px 0 0;
    width: 100%;
    height: 200px;
    max-width: unset;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ArticleInfo = styled.div`
  word-wrap: no-wrap;
  text-overflow: ellipsis;
  color: ${Colors.GRAY3};
`;

const ArticleSource = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 100;
  color: ${Colors.GRAY3};
`;

const ArticleTitle = styled.h1`
  text-transform: capitalize;
  margin: 0;
  min-height: 75px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 22px;
`;

const ArticleDescription = styled.p`
  margin: 0;
  margin-top: 10px;
  min-height: 75px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ReadMore = styled.a`
  display: flex;
  font-weight: 300;
  margin-top: 10px;
  transition: all 0.3s;
  color: #723cb5;
  font-size: 22px;
  flex: 1;
  :after {
    margin-left: 0px;

    content: "➝";
    width: 0px;
    display: inline-block;
    overflow: hidden;
    transition: all 0.2s;
  }
  :hover {
    color: #723cb5;
  }
  :hover:after {
    margin-left: 10px;
    width: 20px;
    color: #723cb5;
  }
`;
