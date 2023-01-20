import { Container, Flex } from "../styled.components"
import { ThemeProvider } from "styled-components"
import Carousel from "../carousel"
import Info from "../info"
interface Props {
    url: string
}
const Main = (): JSX.Element => {
    const theme = {
        primary: true
    }
    return (<>
    <Flex>
        <Carousel/>
        <Info/>
    </Flex>
    </>)
}

export default Main