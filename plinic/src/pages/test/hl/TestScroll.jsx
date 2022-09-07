import React from 'react';
import styled from 'styled-components';
import Scroll from '../../../components/scroll/Scroll';

function TestScroll() {
  return (
    <Wrapper>
      <Scroll place={'myPage'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam dolores omnis quisquam non ea aliquam
        nostrum doloribus? Inventore sapiente perferendis in nihil ex aliquid provident distinctio porro magnam labore.
      </Scroll>
      <Scroll place={'post'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam dolores omnis quisquam non ea aliquam
        nostrum doloribus? Inventore sapiente perferendis in nihil ex aliquid provident distinctio porro magnam labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam dolores omnis quisquam non ea aliquam
        nostrum doloribus? Inventore sapiente perferendis in nihil ex aliquid provident distinctio porro magnam labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam dolores omnis quisquam non ea aliquam
        nostrum doloribus? Inventore sapiente perferendis in nihil ex aliquid provident distinctio porro magnam labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam dolores omnis quisquam non ea aliquam
        nostrum doloribus? Inventore sapiente perferendis in nihil ex aliquid provident distinctio porro magnam labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam dolores omnis quisquam non ea aliquam
        nostrum doloribus? Inventore sapiente perferendis in nihil ex aliquid provident distinctio porro magnam labore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam dolores omnis quisquam non ea aliquam
        nostrum doloribus? Inventore sapiente perferendis in nihil ex aliquid provident distinctio porro magnam labore.
      </Scroll>
    </Wrapper>
  );
}

export default TestScroll;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.align.flexCenter}
  gap: 20px;
`;
