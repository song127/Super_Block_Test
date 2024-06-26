import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { LayerAlign } from "@components/util/WidgetUtils";
import COLORS from "@styles/globalColors";
import { useDarkModeValue } from "@hooks/useDartModeValue";

interface BasicLayoutProps {
    main?: string;
    cross?: string;
    backColor: any;
}

const Layout = styled.div<BasicLayoutProps>`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    min-height: 100vh;
    max-height: max-content;

    transition: background-color 0.3s ease-in-out;

    ${({ main, cross, backColor }) => css`
        justify-content: ${main};
        align-items: ${cross};
        background-color: ${backColor};
    `}
`;

function BasicLayout({
    main = LayerAlign.start,
    cross = LayerAlign.center,
    ...props
}) {
    return (
        <Layout
            main={main}
            cross={cross}
            backColor={useDarkModeValue(COLORS.white, COLORS.dark_2)}
            {...props}>
            {props.children}
        </Layout>
    );
}

export default BasicLayout;
