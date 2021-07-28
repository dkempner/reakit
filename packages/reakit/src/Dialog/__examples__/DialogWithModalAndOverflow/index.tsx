import React from "react";
import {
  useDialogState,
  Dialog,
  DialogDisclosure,
  DialogBackdrop,
} from "reakit/Dialog";

function TallBlock({ color }: { color: string }) {
  return (
    <div style={{ height: "40vh", width: "100%", backgroundColor: color }} />
  );
}

export default function DialogWithModalAndOverflow() {
  const dialog = useDialogState({ modal: true });

  return (
    <>
      <DialogDisclosure {...dialog}>
        <button aria-label="Open long Terms of Service">Open</button>
      </DialogDisclosure>
      <TallBlock color="red" />
      <TallBlock color="green" />
      <TallBlock color="blue" />
      <DialogBackdrop>
        <Dialog {...dialog} aria-label="Read a long Terms of Service">
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              height: "50%",
              width: "50%",
              zIndex: 100,
              padding: 16,
              transform: "translateY(-50%) translateX(-50%)",
              maxHeight: "50%",
              overflowY: "auto",
            }}
          >
            <TallBlock color="yellow" />
            <TallBlock color="purple" />
            <TallBlock color="orange" />
          </div>
        </Dialog>
      </DialogBackdrop>
    </>
  );
}
