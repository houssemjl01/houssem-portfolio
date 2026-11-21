"""Build the downloadable CV PDF from the same content as cv/houssem-jlassi-cv.tex.

Requires: reportlab (already available in this environment).
Run from the repository root: python scripts/build_cv_pdf.py
"""

from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv" / "houssem-jlassi-cv.pdf"

INK = "#111315"
MUTED = "#5F6673"
ACCENT = "#2F5FE0"
HAIRLINE = "#D8DEE9"


def register_fonts() -> tuple[str, str, str, str]:
    font_dir = Path(r"C:\Windows\Fonts")
    candidates = {
        "regular": ("Arial", font_dir / "arial.ttf", "Helvetica"),
        "bold": ("Arial-Bold", font_dir / "arialbd.ttf", "Helvetica-Bold"),
        "italic": ("Arial-Italic", font_dir / "ariali.ttf", "Helvetica-Oblique"),
        "bold_italic": (
            "Arial-BoldItalic",
            font_dir / "arialbi.ttf",
            "Helvetica-BoldOblique",
        ),
    }

    names: dict[str, str] = {}
    for key, (name, path, fallback) in candidates.items():
        if path.exists():
            pdfmetrics.registerFont(TTFont(name, str(path)))
            names[key] = name
        else:
            names[key] = fallback

    return (
        names["regular"],
        names["bold"],
        names["italic"],
        names["bold_italic"],
    )


REGULAR, BOLD, ITALIC, BOLD_ITALIC = register_fonts()

styles = {
    "name": ParagraphStyle(
        "name",
        fontName=BOLD,
        fontSize=20,
        leading=22,
        alignment=TA_CENTER,
        textColor=colors.HexColor(INK),
    ),
    "role": ParagraphStyle(
        "role",
        fontName=REGULAR,
        fontSize=8.6,
        leading=11,
        alignment=TA_CENTER,
        textColor=colors.HexColor(MUTED),
    ),
    "contact": ParagraphStyle(
        "contact",
        fontName=REGULAR,
        fontSize=8.4,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor(INK),
    ),
    "section": ParagraphStyle(
        "section",
        fontName=BOLD,
        fontSize=9.2,
        leading=11,
        textColor=colors.HexColor(ACCENT),
        spaceAfter=3,
    ),
    "entry_title": ParagraphStyle(
        "entry_title",
        fontName=BOLD,
        fontSize=9.4,
        leading=11.5,
        textColor=colors.HexColor(INK),
    ),
    "entry_meta": ParagraphStyle(
        "entry_meta",
        fontName=ITALIC,
        fontSize=8.2,
        leading=11,
        alignment=TA_RIGHT,
        textColor=colors.HexColor(MUTED),
    ),
    "entry_sub": ParagraphStyle(
        "entry_sub",
        fontName=ITALIC,
        fontSize=8.4,
        leading=11,
        textColor=colors.HexColor(MUTED),
    ),
    "body": ParagraphStyle(
        "body",
        fontName=REGULAR,
        fontSize=8.7,
        leading=11.8,
        alignment=TA_LEFT,
        textColor=colors.HexColor(INK),
    ),
    "bullet": ParagraphStyle(
        "bullet",
        fontName=REGULAR,
        fontSize=8.5,
        leading=11.2,
        textColor=colors.HexColor(INK),
    ),
    "skill_label": ParagraphStyle(
        "skill_label",
        fontName=BOLD,
        fontSize=8.5,
        leading=11.2,
        textColor=colors.HexColor(INK),
    ),
    "skill_value": ParagraphStyle(
        "skill_value",
        fontName=REGULAR,
        fontSize=8.5,
        leading=11.2,
        textColor=colors.HexColor(INK),
    ),
    "cert_name": ParagraphStyle(
        "cert_name",
        fontName=BOLD,
        fontSize=8.8,
        leading=11,
        alignment=TA_CENTER,
        textColor=colors.HexColor(INK),
    ),
    "cert_body": ParagraphStyle(
        "cert_body",
        fontName=REGULAR,
        fontSize=8.1,
        leading=10.5,
        alignment=TA_CENTER,
        textColor=colors.HexColor(INK),
    ),
    "cert_meta": ParagraphStyle(
        "cert_meta",
        fontName=REGULAR,
        fontSize=7.8,
        leading=10,
        alignment=TA_CENTER,
        textColor=colors.HexColor(MUTED),
    ),
}


def link(url: str, label: str) -> str:
    return f'<link href="{escape(url)}" color="{ACCENT}">{escape(label)}</link>'


def bullets(items: list[str]) -> ListFlowable:
    return ListFlowable(
        [
            ListItem(
                Paragraph(item, styles["bullet"]),
                leftIndent=10,
            )
            for item in items
        ],
        bulletType="bullet",
        bulletColor=colors.HexColor(ACCENT),
        bulletFontSize=5,
        leftIndent=10,
        spaceBefore=1,
        spaceAfter=0,
    )


def section(title: str) -> list:
    return [
        Spacer(1, 5),
        Paragraph(escape(title).upper(), styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.6,
            color=colors.HexColor(HAIRLINE),
            spaceBefore=0,
            spaceAfter=4,
        ),
    ]


def entry(title: str, meta: str, subtitle: str) -> Table:
    table = Table(
        [
            [
                Paragraph(f"<b>{escape(title)}</b>", styles["entry_title"]),
                Paragraph(escape(meta), styles["entry_meta"]),
            ],
            [Paragraph(escape(subtitle), styles["entry_sub"]), ""],
        ],
        colWidths=[135 * mm, 43 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def skill_rows(rows: list[tuple[str, str]]) -> Table:
    data = [
        [
            Paragraph(escape(label), styles["skill_label"]),
            Paragraph(escape(value), styles["skill_value"]),
        ]
        for label, value in rows
    ]
    table = Table(data, colWidths=[32 * mm, 146 * mm])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0.6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0.6),
            ]
        )
    )
    return table


def certifications() -> Table:
    data = [
        [
            Paragraph("HCDA", styles["cert_name"]),
            Paragraph("HBF", styles["cert_name"]),
            Paragraph("HCF", styles["cert_name"]),
        ],
        [
            Paragraph("Hedera Certified<br/>Developer Associate", styles["cert_body"]),
            Paragraph("Hedera Business<br/>Foundation", styles["cert_body"]),
            Paragraph("Hedera Certified<br/>Foundation", styles["cert_body"]),
        ],
        [
            Paragraph("The Hashgraph Association<br/>Aug 2026", styles["cert_meta"]),
            Paragraph("The Hashgraph Association<br/>Aug 2026", styles["cert_meta"]),
            Paragraph("The Hashgraph Association", styles["cert_meta"]),
        ],
    ]
    table = Table(data, colWidths=[59.3 * mm, 59.3 * mm, 59.4 * mm])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 2),
                ("RIGHTPADDING", (0, 0), (-1, -1), 2),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ("LINEBEFORE", (1, 0), (1, -1), 0.5, colors.HexColor(HAIRLINE)),
                ("LINEBEFORE", (2, 0), (2, -1), 0.5, colors.HexColor(HAIRLINE)),
            ]
        )
    )
    return table


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setTitle("Houssem Eddin Jlassi — CV")
    canvas.setAuthor("Houssem Eddin Jlassi")
    canvas.setSubject("Software Engineering Student and Full-Stack Developer")
    canvas.setFont(REGULAR, 7.5)
    canvas.setFillColor(colors.HexColor(MUTED))
    canvas.drawString(38, 20, "Houssem Eddin Jlassi")
    canvas.drawRightString(A4[0] - 38, 20, f"{doc.page}")
    canvas.restoreState()


def build() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=19 * mm,
        rightMargin=19 * mm,
        topMargin=15 * mm,
        bottomMargin=15 * mm,
        title="Houssem Eddin Jlassi — CV",
        author="Houssem Eddin Jlassi",
        subject="Software Engineering Student and Full-Stack Developer",
    )

    story = [
        Paragraph("HOUSSEM EDDIN JLASSI", styles["name"]),
        Paragraph(
            "SOFTWARE ENGINEERING STUDENT | FULL-STACK DEVELOPER",
            styles["role"],
        ),
        Spacer(1, 3),
        Paragraph(
            " | ".join(
                [
                    link("mailto:houssemjlassi187@gmail.com", "houssemjlassi187@gmail.com"),
                    link(
                        "https://www.linkedin.com/in/houssem-eddin-jlassi-824a8742b",
                        "LinkedIn",
                    ),
                    link("https://github.com/houssemjl01", "GitHub"),
                    link("https://houssem-portfolio-gray.vercel.app", "Portfolio"),
                ]
            ),
            styles["contact"],
        ),
        Paragraph("Tunis, Tunisia | +216 93 536 505", styles["contact"]),
        Spacer(1, 4),
        HRFlowable(width="100%", thickness=1, color=colors.HexColor(ACCENT)),
    ]

    story += section("Profile Summary")
    story.append(
        Paragraph(
            "Third-year <b>Software Engineering</b> student specializing in Software "
            "Engineering and Information Systems at ISLAIb Béja. Hands-on full-stack "
            "experience from a <b>PFA internship at Vermeg</b>, where I built an email "
            "template management platform with <b>Angular, Spring Boot, PostgreSQL, and "
            "JWT authentication</b>. Strong interest in backend and full-stack "
            "development, with additional exposure to blockchain through three Hedera "
            "certifications. Seeking a <b>PFE internship</b> starting February 2027 in "
            "Tunis or remote.",
            styles["body"],
        )
    )

    story += section("Professional Experience")
    story.append(
        entry(
            "Vermeg for Banking & Insurance Software",
            "Tunis, Tunisia · On-site",
            "Full-Stack Developer Intern — PFA Internship                         Jul 2026",
        )
    )
    story.append(
        bullets(
            [
                "<b>Built end to end</b> an email template management platform during a PFA internship at <b>Vermeg</b>, an international banking and insurance software company.",
                "Developed the <b>Angular</b> interface for template CRUD, categorization, search, live preview, SMTP sending, and send-history tracking.",
                "Implemented the <b>Spring Boot</b> API with <b>JWT authentication</b>, REST endpoints, and <b>PostgreSQL</b> persistence using JPA.",
                "Integrated <b>Spring Mail</b> with <b>MailHog</b> to test SMTP delivery locally, and debugged a race condition in the sending workflow.",
                "Identified and remediated a cross-site scripting (XSS) risk in the template rendering flow.",
            ]
        )
    )

    story += section("Education")
    story.append(
        entry(
            "Institut Supérieur des Langues Appliquées et d'Informatique de Béja (ISLAIb)",
            "Béja, Tunisia",
            "Bachelor's Degree in Computer Science — Software Engineering (Génie Logiciel et Systèmes d'Information)                         2024–2027 (Expected)",
        )
    )
    story.append(
        bullets(
            [
                "Third-year student with coursework in software engineering, information systems, databases, and web/mobile development."
            ]
        )
    )

    story += section("Technical Skills")
    story.append(
        skill_rows(
            [
                ("Programming", "Java, JavaScript/TypeScript, PHP, Python, C, SQL"),
                ("Frontend", "Angular, HTML5, CSS3, JavaScript"),
                ("Backend", "Spring Boot, REST APIs, JPA/Hibernate, JWT"),
                ("Databases", "PostgreSQL, MySQL"),
                ("Data Analysis", "Pandas, NumPy, Matplotlib, Seaborn"),
                ("Tools & Methods", "Git, SMTP/MailHog, UML, Agile/Scrum, IntelliJ IDEA, VS Code"),
                ("Blockchain", "Hedera Hashgraph — Hedera Certified Developer Associate"),
            ]
        )
    )

    story += section("Academic Projects")
    story.append(
        entry(
            "Restaurant Management System — CRUD Web Application",
            "PHP, MySQL, HTML, CSS, JavaScript",
            "Academic project",
        )
    )
    story.append(
        bullets(
            [
                "<b>Designed and built</b> a restaurant management web application using an <b>MVC architecture</b> in PHP.",
                "Implemented <b>CRUD</b> operations for menus, orders, customers, and tables, backed by a relational <b>MySQL</b> schema.",
                "Secured SQL queries and session handling; built a responsive HTML5/CSS3 interface with JavaScript interactions.",
            ]
        )
    )
    story.append(Spacer(1, 4))
    story.append(
        entry(
            "Bank Fraud Detection — Data Analysis",
            "Python, Pandas, NumPy, Matplotlib, Seaborn",
            "Academic project",
        )
    )
    story.append(
        bullets(
            [
                "<b>Analyzed</b> a real-world banking transactions dataset (Kaggle) to explore and identify fraud patterns.",
                "Cleaned and preprocessed data with <b>Pandas</b> (missing values, normalization, encoding) and computed statistical indicators with <b>NumPy</b>.",
                "Visualized fraud patterns with <b>Matplotlib</b> and <b>Seaborn</b>, and identified discriminative features for anomaly detection.",
            ]
        )
    )

    story += section("Certifications")
    story.append(certifications())

    story += section("Languages")
    story.append(
        Paragraph(
            "<b>Arabic</b> &mdash; Native &nbsp;&nbsp;&nbsp; <b>French</b> &mdash; Intermediate "
            "&nbsp;&nbsp;&nbsp; <b>English</b> &mdash; Intermediate",
            styles["body"],
        )
    )

    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
    print(f"Wrote {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    build()
