import eventsCenter from "../Events/eventsCenter";

export default class Scene1 extends Phaser.Scene {
	public static Name = "Scene1";
	
    public preload(): void {
		// Preload as needed.
	}

	public create(): void {
        this.input.keyboard.on('keyboard-SPACE',
			() => {
				eventsCenter.emit("scene", Scene1.Name);
			}
		);
	}
}
