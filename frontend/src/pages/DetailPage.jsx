import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const DetailPage = () => {
    const navigate = useNavigate()
    const onClickAddHandler = () => {
        navigate(`/`)
    }
    const [isEditing, setIsEditing] = useState(false);
    const handleClick = () => {
        setIsEditing(!isEditing)
        console.log(isEditing)
    }
    return (
        <div>

            <StTodoCard>
                <Form>
                    <TitleInput
                        type='text' />
                    <ContentInput />
                </Form>
            </StTodoCard>
            <StBottom>
                <div onClick={onClickAddHandler}>목록으로 돌아가기</div>
                <div>
                    {isEditing ? (
                        <StCancelButton
                            onClick={handleClick}
                        >
                            취소
                        </StCancelButton>
                    ) : (
                        <StButton onClick={handleClick}>
                            수정
                        </StButton>
                    )}
                    {isEditing ? (
                        <StButton type='submit' onClick={handleClick}>
                            완료
                        </StButton>
                    ) : (
                        <StButton
                            onClick={handleClick}
                        >
                            삭제
                        </StButton>
                    )}
                </div>
            </StBottom>
        </div>
    );
};

export default DetailPage;



const StTodoCard = styled.div`
    margin: 20px 0;
    border-radius: 20px;
    width: 620px;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;

    & > p {
    height: 200px;
    padding: 0 1rem;
    }
`;

const StBottom = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffbc3f;
    font-weight: bold;

    > div {
    display: flex;
    gap: 15px;
    }

    > p {
    cursor: pointer;
    }
`;

const StButton = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: #ffbc3f;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
`;

const StCancelButton = styled.button`
    background-color: white;
    border: 2px solid #ffbc3f;
    padding: 10px 20px;
    color: #ffbc3f;
    font-weight: bold;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
`;

const TitleInput = styled.input`
    border: none;
    border-bottom: 1px solid #ffbc3f;
    padding: 15px;
    outline: none;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const ContentInput = styled.textarea`
    border: none;
    padding: 15px;
    height: 200px;
    outline: none;
    resize: none;
`;