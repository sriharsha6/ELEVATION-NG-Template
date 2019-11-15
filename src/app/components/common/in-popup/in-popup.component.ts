import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { TemplatePortalDirective, ComponentPortal } from "@angular/cdk/portal";

@Component({
  selector: "app-in-popup",
  templateUrl: "./in-popup.component.html",
  styleUrls: ["./in-popup.component.css"]
})
export class InPopupComponent {

  overlayRef: OverlayRef;
  
  @ViewChild("overlayTemplate", null) overlayTemplate: TemplatePortalDirective;

  constructor(private overlay: Overlay) {}

  openTemplateOverlay() {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .height("300px")
      .width("300px")
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      positionStrategy
    });

    overlayConfig.hasBackdrop = true;

    this.overlayRef = this.overlay.create(overlayConfig);

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.dispose();
    });

    this.overlayRef.attach(this.overlayTemplate);
  }

  // Component overlay using CdkPortal
  // openComponentOverlay() {
  //   const overlayRef = this.overlay.create({
  //     hasBackdrop: true,
  //     width: "200px",
  //     height: "200px"
  //   });

  // const popupComponentPortal = new ComponentPortal(PopupComponent);

  // overlayRef.attach(popupComponentPortal);

  //   overlayRef.backdropClick().subscribe(() => {
  //     overlayRef.dispose();
  //   });
  // }
}
