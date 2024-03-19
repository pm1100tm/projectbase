import { css, styled } from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
};

const Button = styled.button.attrs<ButtonProps>((props) => ({
  type: props.type ?? 'button',
}))<ButtonProps>`
  background: #fff;

  ${(props: ButtonProps) =>
    props.active &&
    css`
      background: red;
    `}
`;

const PrimaryButton = styled(Button)`
  background: black;
  color: white;

  ${(props: ButtonProps) =>
    props.active &&
    css`
      background: red;
    `}
`;

type SwitchProps = {
  active: boolean;
  toggle: () => void;
};

export default function Switch({ active, toggle }: SwitchProps) {
  return (
    <PrimaryButton type='submit' onClick={toggle} active={active}>
      On/Off
    </PrimaryButton>
  );
}
