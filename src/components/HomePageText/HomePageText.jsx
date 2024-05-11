import { TextDiv, TextOnHomePage } from "./HomePageText.styled";

const HomePageText = () => {
    return (
        <TextDiv>
            <TextOnHomePage>
                Before starting your project, it is essential{' '}
                {/*<CreateBoard onClick={toggleModal}>*/}to create a board{/*</CreateBoard>*/} to
                visualize and track all the necessary tasks and milestones. This board
                serves as a powerful tool to organize the workflow and ensure
                effective collaboration among team members.
            </TextOnHomePage>
        </TextDiv>
    )
}

export default HomePageText;