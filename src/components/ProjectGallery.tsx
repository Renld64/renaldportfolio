import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./styles/ProjectGallery.css";

const ProjectGallery = ({ images, title }: { images: string[]; title: string }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selected === null) return;
    const modal = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    modal?.showModal();
    closeButton.current?.focus();
    return () => {
      modal?.close();
      previousFocus?.focus();
    };
  }, [selected !== null]);

  return (
    <>
      <div className="project-gallery" aria-label={`${title} image gallery`}>
        {images.map((image, index) => (
          <button key={image} type="button" className="project-gallery-thumb" onClick={() => setSelected(index)} aria-label={`Enlarge ${title}, image ${index + 1}`} data-cursor="disable">
            <img src={image} alt={`${title}, scene ${index + 1}`} loading="lazy" decoding="async" />
            <span aria-hidden="true">Zoom ↗</span>
          </button>
        ))}
      </div>
      {selected !== null && createPortal(
        <dialog className="project-lightbox" ref={dialog} aria-label={`${title}, enlarged image`} onCancel={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={(event) => {
          if (event.key === "ArrowRight") setSelected((selected + 1) % images.length);
          if (event.key === "ArrowLeft") setSelected((selected - 1 + images.length) % images.length);
        }}>
          <div className="project-lightbox-content" data-lenis-prevent>
            <button ref={closeButton} type="button" className="project-lightbox-close" onClick={() => setSelected(null)} aria-label="Close enlarged image">×</button>
            <img src={images[selected]} alt={`${title}, scene ${selected + 1}`} />
            <div className="project-lightbox-controls">
              <button type="button" onClick={() => setSelected((selected - 1 + images.length) % images.length)} aria-label="Previous image">←</button>
              <span>{selected + 1} / {images.length}</span>
              <button type="button" onClick={() => setSelected((selected + 1) % images.length)} aria-label="Next image">→</button>
            </div>
          </div>
        </dialog>, document.body
      )}
    </>
  );
};

export default ProjectGallery;
