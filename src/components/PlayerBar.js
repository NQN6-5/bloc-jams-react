import React, { Component } from 'react';



class PlayerBar extends Component {
    render() {
        return (
            <section className="player-bar">
                <section id="buttons">
                    <button id="previous" onClick={this.props.handlePrevClick}>
                        <span className="ion-skip-backward"></span>
                        <ion-icon name="skip-backward"></ion-icon>
                    </button>
                    <button id="play-pause" onClick={this.props.handleSongClick}>
                        <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>

                        <ion-icon name="play"></ion-icon>
                        <ion-icon name="pause"></ion-icon>
                    </button>
                    <button id="next" onClick={this.props.handleNextClick}>
                        <span className="ion-skip-forward"></span>
                        <ion-icon name="skip-forward"></ion-icon>
                    </button>
                </section>
                <section id="time-control">
                    <div className="current-time">{this.props.currentTime}</div>
                    <input
                        type="range"
                        className="seek-bar"
                        value={(this.props.currentTime / this.props.duration) || 0}
                        max="1"
                        min="0"
                        step="0.01"
                        onChange={this.props.handleTimeChange}
                    />
                    <div className="total-time">{this.props.duration}</div>
                </section>
                <section id="volume-control">
                    <div className="time-left">-{this.props.formattedTimeLeft}</div>
                </section>
                <section id="volume-control">
                    <div className="volume-icon ion-volume-medium"></div>
                    <input
                        type="range"
                        className="volume-bar"
                        value={this.props.currentVolume}
                        max="1"
                        min="0"
                        step="0.01"
                        onChange={this.props.handleVolumeChange}
                    />
                </section>
            </section>
        );
    }
}

export default PlayerBar;