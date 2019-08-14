import React, { Component } from 'react';

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/


export default class WithTooltip extends Component {
  state = {
    isShown: false
  }

  render() {
    const {children} = this.props
    return children((event) => {
      this.setState({isShown: !this.state.isShown})
      if (isShown) {
        event.target.appendChild(<div data-testid="tooltip">Hello, i'm Tooltip</div>)
      } else {
        event.target.removeChild(document.querySelector('[data-testid="tooltip"]'))
      }
    })
  }
}