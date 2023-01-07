import eventsCenter from "../Events/eventsCenter";

export default class Scene2 extends Phaser.Scene {
	
	public static Name = "Scene2";
	public count = 0;
    
	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		this.input.keyboard.on('keyboard-SPACE',
			() => {
				this.count++;
				eventsCenter.emit("update-count", this.count);
			}
		);
		eventsCenter.on("update-count", this.updateCount, this);
	}

	public updateCount(count: integer) {
		this.count = count;
	}
}
