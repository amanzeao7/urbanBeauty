import type { TeamMember } from '@/types/payload'

interface TeamProps {
  team: TeamMember[]
}

export default function Team({ team }: TeamProps) {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      style={{ padding: '120px 64px', background: 'var(--off-white)' }}
      className="team-section"
    >
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '72px' }}>
        <div className="section-tag center">The Experts</div>
        <h2
          id="team-heading"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 300, color: 'var(--black)',
          }}
        >
          Meet our <em>team</em>
        </h2>
      </div>

      <div
        className="team-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '28px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {team.map((member, i) => {
          const delay = ['', 'delay-1', 'delay-2', 'delay-3'][i % 4]
          return (
            <article key={member.id} className={`reveal ${delay}`}>
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '3/4',
                marginBottom: '20px',
              }} className="team-photo-wrap">
                <img
                  src={member.photo.url}
                  alt={member.photo.alt}
                  width={400}
                  height={533}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%)',
                    display: 'block',
                    transition: 'all .5s',
                  }}
                  loading="lazy"
                  className="team-photo"
                />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px', fontWeight: 400,
                color: 'var(--black)', marginBottom: '5px',
              }}>{member.name}</h3>
              <div style={{
                fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase',
                color: 'var(--accent)', marginBottom: '10px',
              }}>{member.role}</div>
              <p style={{
                fontSize: '12px', fontWeight: 300,
                lineHeight: 1.7, color: 'var(--grey)',
              }}>{member.bio}</p>
            </article>
          )
        })}
      </div>

      <style>{`
        .team-photo-wrap:hover .team-photo {
          filter: grayscale(40%) !important;
          transform: scale(1.04);
        }
        @media (max-width: 900px) {
          .team-section { padding: 80px 24px !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
        }
        @media (max-width: 400px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
