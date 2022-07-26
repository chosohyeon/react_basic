const Main = ({ i, work }) => {
    return (
        <main>
            {i}는 {work}를 원합니다.
        </main>

    )
}

// 전달 받은 값이 없을 때 기본으로 전해주는 값...
Main.defaultProps = {
    work: '놀기'
}
export default Main;