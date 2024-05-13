import React from 'react';
import * as Styled from './RadioPop.styled';
import sprite from '../../../assets/svg/sprite.svg';

const RadioPop = ({ todoList, handleChange }) => {
    return (
        <Styled.ThemeDiv>
            <Styled.DropdownMenu>
                <ul>
                    {(todoList !== 1) && (
                        <Styled.ThemeText onClick={() => handleChange(1)}>
                            To Do
                            <Styled.ThemeIcon>
                                <svg>
                                    <use xlinkHref={`${sprite}#broken-right`} />
                                </svg>
                            </Styled.ThemeIcon>
                        </Styled.ThemeText>
                    )}
                    {(todoList !== 2) && (
                        <Styled.ThemeText onClick={() => handleChange(2)}>
                            In Progress
                            <Styled.ThemeIcon>
                                <svg>
                                    <use xlinkHref={`${sprite}#broken-right`} />
                                </svg>
                            </Styled.ThemeIcon>
                        </Styled.ThemeText>
                    )}
                    {(todoList !== 3) && (
                        <Styled.ThemeText onClick={() => handleChange(3)}>
                            Done
                            <Styled.ThemeIcon>
                                <svg>
                                    <use xlinkHref={`${sprite}#broken-right`} />
                                </svg>
                            </Styled.ThemeIcon>
                        </Styled.ThemeText>
                    )}
                </ul>
            </Styled.DropdownMenu>
        </Styled.ThemeDiv>
    );
};

export default RadioPop;

// const RadioPop = ({todoList, showModal }) => {

//   const handleChange = e => {
    
//     showModal(false);
//   };

//   return (
//     <Styled.ThemeDiv>
//         <Styled.DropdownMenu >
//           <ul>{(todoList !== 1 ) && ( 
//             <li onClick={() => handleChange(1)}>To Do</li>)}
//            {(todoList !== 2 ) && ( 
//             <li onClick={() => handleChange(2)}>In progress</li>)}
//             {(todoList !== 3 ) && ( 
//             <li onClick={() => handleChange(3)}>Done</li>)}
//           </ul>
//         </Styled.DropdownMenu>
//     </Styled.ThemeDiv>
//   );
// };

// export default RadioPop;
