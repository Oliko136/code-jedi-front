import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Styled from './ThemeSelection.styled';

import UserHeader from '../UserHeader/UserHeader';
import { updateTheme } from '../../../redux/theme/theme-operations';
import baseSvgPath from '../../../assets/svg/sprite.svg';

const ThemeSelection = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('currentTheme') || 'dark'
  );

  const menuRef = useRef(null);
  const textRef = useRef(null);
  const svgRef = useRef(null);

  const dispatch = useDispatch();

  const handleThemeChange = theme => {
    dispatch(updateTheme({ theme }));
    setCurrentTheme(theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('currentTheme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !textRef.current.contains(event.target) &&
        !svgRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Styled.ThemeDiv>
      <Styled.ThemeSubDiv ref={textRef} onClick={toggleMenu}>
        <Styled.ThemeText>Theme</Styled.ThemeText>
        <Styled.ThemeIcon ref={svgRef}>
          <use
            href={baseSvgPath + (showMenu ? '#chevron-down' : '#chevron-down')} //I think we can have chevron-up icon when theme is being selecting
          />
        </Styled.ThemeIcon>
      </Styled.ThemeSubDiv>
      {showMenu && (
        <Styled.DropdownMenu ref={menuRef}>
          <ul>
            <li onClick={() => handleThemeChange('dark')}>Dark</li>
            <li onClick={() => handleThemeChange('light')}>Light</li>
            <li onClick={() => handleThemeChange('violet')}>Violet</li>
          </ul>
        </Styled.DropdownMenu>
      )}
      <UserHeader currentTheme={currentTheme} />
    </Styled.ThemeDiv>
  );
};

export default ThemeSelection;
