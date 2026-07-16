"""Generate Cosmos Group favicons from the official circular logo mark."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "logos" / "Cosmos Logo-01.png"
OUT = ROOT / "public"


def resize_hq(im: Image.Image, size: int) -> Image.Image:
    return im.resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    img = Image.open(SRC).convert("RGBA")
    w, h = img.size
    print(f"source: {w}x{h}")

    # Keep the circular mark; make the square black backdrop transparent.
    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    inset = int(w * 0.01)
    draw.ellipse((inset, inset, w - 1 - inset, h - 1 - inset), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=max(1, w // 900)))

    transparent = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    circled = Image.composite(img, transparent, mask)

    for name, size in {
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "favicon.png": 32,
        "android-chrome-192x192.png": 192,
        "android-chrome-512x512.png": 512,
    }.items():
        resize_hq(circled, size).save(OUT / name, format="PNG", optimize=True)
        print(f"wrote {name}")

    # Apple touch icons prefer an opaque background.
    apple_size = 180
    apple_mark = resize_hq(circled, apple_size)
    apple = Image.new("RGBA", (apple_size, apple_size), (0, 0, 0, 255))
    apple.paste(apple_mark, (0, 0), apple_mark)
    apple.save(OUT / "apple-touch-icon.png", format="PNG", optimize=True)
    print("wrote apple-touch-icon.png")

    ico_path = OUT / "favicon.ico"
    # Pillow builds a multi-resolution ICO from the sizes= list.
    circled.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"wrote favicon.ico ({ico_path.stat().st_size} bytes)")
    print("done")


if __name__ == "__main__":
    main()
