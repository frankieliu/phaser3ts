import Utilities from "../Utilities";
import eventsCenter from "../Events/eventsCenter";

export default class MainGame extends Phaser.Scene {
	/**
	 * Unique name of the scene.
	 */
	public static Name = "MainGame";

	private count = 0;

	public preload(): void {
		// Preload as needed.
	}

	public create(): void {
		Utilities.LogSceneMethodEntry("MainGame", "create");
		
		const [x, y] = [
			this.cameras.main.centerX,
			this.cameras.main.centerY];
		const sp = this.add.sprite(x, y, "Phaser-Logo-Small");
		// sp.setScale(0.1,0.1);
		this.tweens.add({
			targets: sp,
			alpha: {from: 0, to: 1},
			repeat: 2,
		})
		
		this.input.keyboard.on('keyboard-SPACE',
			() => {
				this.count++;
				eventsCenter.emit("update-count", this.count);
			}
		)

	}

	public update(time: number, delta: number): void {
		
	}
}
