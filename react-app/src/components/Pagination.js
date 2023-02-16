import React from "react";
import styled from "styled-components";

function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  // 페이지 넘버를 설정하기 위해 페이지당 포스트 개수와 총 포스트 개수를 가져온다.
  // index 를 1로 설정하고, index 가 (총 포스트개수 / 페이지당 포스트 개수) 보다 크지 않을때까지 i값을 올린다.
  // 그리고 그 값을 pageNumber 에 넣어서 설장한다.
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Wrapper>
      <PageLists>
        {pageNumbers.map((number) => (
          <PageNumber key={number}>
            <PageButton onClick={() => paginate(number)}>{number}</PageButton>
          </PageNumber>
        ))}
      </PageLists>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageLists = styled.ul`
  display: flex;
`;
const PageNumber = styled.li`
  list-style: none;
`;
const PageButton = styled.button`
  position: relative;
  font-size: 22px;
  color: #fff;
  margin: 0 20px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: #ef6834;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 35px;
      height: 35px;
      border: 1px solid #ef6834;
      border-radius: 50%;
    }
  }
`;

export default Pagination;
