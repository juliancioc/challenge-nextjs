import styled from 'styled-components';

export const Item = styled.div`
    flex: 1;
    margin: 7px 10px 10px 20px;
`;

export const Wrapper = styled.div`
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    display: flex;
    margin: 0px 15px 0px 15px;
    align-items: center;
    height: 60px;

    :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`;

export const WrapperIcon = styled.div`
    margin: 5px;
`;

export const Select = styled.select`
    margin: 0px 10px 0px 7px;
    height: 25px;
    width: 160px;
`;

export const WrapperFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;

export const Container = styled.div`
    color: #262626;
    max-width: 700px;
    margin: 0 auto;
`;
