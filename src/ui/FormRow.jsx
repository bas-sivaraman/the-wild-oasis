import styled, { css } from "styled-components";

const StyledFormRow = styled(({ type, ...rest }) => <div {...rest} />)`
  ${(props) =>
    props.type === "vertical"
      ? css`
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        `
      : css`
          display: grid;
          align-items: center;
          grid-template-columns: 24rem 1fr 1.2fr;
          gap: 2.4rem;
        `}

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    ${(props) =>
      props.type === "vertical"
        ? css`
            justify-content: stretch;
          `
        : css`
            justify-content: flex-end;
          `}
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, children, error, type }) {
  if (!label) return <StyledFormRow type={type}>{children}</StyledFormRow>;

  return (
    <StyledFormRow type={type}>
      <Label htmlFor={children.props.id}>{label}</Label>
      {children}
      {error && <Error>{error.message}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
