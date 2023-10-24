import React  from "react";
import ReactPlayer from "react-player";
import styles from "../styles/VideosComponent_v2.module.css";
class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",classActive: ""};
    }
    urlHandler = (e) => {
        let url = e.target.dataset.url;
        const container = e.target.parentElement.children;
        for (let el of container) {
            el.classList.remove(styles.videosContainerListItemActive);
        }
        e.target.classList.add(styles.videosContainerListItemActive);
        this.setState({url});
    }

    render() {
        return (
            <section className={styles.videos}>
                <div className={styles.videosContainer}>
                    <div className={styles.videosContainerList}>
                        <span className={styles.videosContainerListTitle}>Посмотрите подробную видео инструкцию о том, как:</span>
                        <ul className={styles.videosContainerListItems}>
                            <li className={styles.videosContainerListItem + this.state.classActive} data-url={"https://www.youtube.com/watch?v=1bXFfgCMhIA&t=474s"} onClick={this.urlHandler}>создать свой магазин в Telegram с помощью нашего сервиса</li>
                            <li className={styles.videosContainerListItem + this.state.classActive} data-url={"https://www.youtube.com/watch?v=QYGDuZhD5QY&t=75s"} onClick={this.urlHandler}>управлять товарами (загружать, удалять и тд.)</li>
                            <li className={styles.videosContainerListItem + this.state.classActive} data-url={"https://www.youtube.com/watch?v=29BjFtz_nog"} onClick={this.urlHandler}>настраивать внешний вид магазина</li>
                            <li className={styles.videosContainerListItem + this.state.classActive} data-url={"https://www.youtube.com/watch?v=AYC1UZyPniI"} onClick={this.urlHandler}>смотреть и анализировать заказы</li>
                            <li className={styles.videosContainerListItem + this.state.classActive} data-url={"https://www.youtube.com/watch?v=o1RXkoJIegk"} onClick={this.urlHandler}>получать аналитику</li>
                            <li className={styles.videosContainerListItem + this.state.classActive} data-url={"https://www.youtube.com/watch?v=EYNp6ivirn8"} onClick={this.urlHandler}>делать рассылки через телеграмм магазин</li>
                        </ul>
                    </div>
                    <div className={styles.videosContainerListPlayer}>
                        <ReactPlayer url={this.state.url} width="100%" height="100%" controls/>
                    </div>
                    
                </div>
            </section>
        )
    }
}
export default Videos;