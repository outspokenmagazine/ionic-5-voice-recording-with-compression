import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
declare let Media: any; // stops errors w/ cordova-plugin-media-with-compression types

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recording = false;
  media: any = '';



  constructor(
  ) {

  }



recordAudio() {
  this.media = new Media('voicerecording.m4a');

    // Record MPEG compressed audio, single channel at 16kHz
    const options = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      SampleRate: 441000,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      NumberOfChannels: 2
  };

  this.media.startRecordWithCompression(options);
  this.recording = true;
}
stopRecordAndReplayAudio() {
  this.media.stopRecord();
  this.media.release();
  this.recording = false;
  this.media = new Media('voicerecording.m4a');
  this.media.setVolume(1.0);
  this.media.play();
  this.media.setVolume(1.0);

}


}
