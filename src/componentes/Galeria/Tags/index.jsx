import styled from 'styled-components';
import tags from './tags.json'

const TagsSectionEstilizado = styled.section `
    display: flex;
    gap: 60px;
    align-items: center;
    color: #D9D9D9;
    font-size: 24px;
    line-height: 28.8px;
    font-weight: 400;
    margin-top: 60px;

    p {
        color: #D9D9D9;
        font-size: 24px;
        margin: 0;
    }
`;


const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;

    &:hover {
      border-color: #C98CF1;
    }
`

const ContainerTags = styled.div `
    display: flex;
    gap: 10px;
`
    

const Tags = () => {
    return (
        <TagsSectionEstilizado>
            <p>Busque por tags:</p>
            <ContainerTags>{tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}</ContainerTags>
        </TagsSectionEstilizado>
    )
};

export default Tags;