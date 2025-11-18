const poemCollections = [
  {
    id: 1,
    title: "Echoes in Silence",
    collection: "Echoes of Tomorrow",
    year: 2021,
    preview: "In the spaces between words..."
  },
  {
    id: 2,
    title: "The Resilience of Light",
    collection: "Echoes of Tomorrow",
    year: 2021,
    preview: "Even when shadows grow long..."
  },
  {
    id: 3,
    title: "Conversations",
    collection: "Words Unbound",
    year: 2017,
    preview: "We are all stories waiting..."
  },
  {
    id: 4,
    title: "Whispers",
    collection: "Whispers in Silence",
    year: 2019,
    preview: "Soft words spoken in the dark..."
  },
  {
    id: 5,
    title: "Between Worlds",
    collection: "Whispers in Silence",
    year: 2019,
    preview: "Neither here nor there, suspended..."
  },
  {
    id: 6,
    title: "Becoming",
    collection: "Words Unbound",
    year: 2017,
    preview: "We transform with each passing day..."
  }
]

export function PoemsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {poemCollections.map((poem) => (
        <div key={poem.id} className="bg-card border border-border rounded-lg p-6 hover:border-primary transition cursor-pointer group">
          <div className="mb-4 p-8 bg-muted rounded aspect-square flex items-center justify-center group-hover:bg-muted/80 transition">
            <span className="text-4xl">✍️</span>
          </div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">{poem.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{poem.collection}</p>
          <p className="text-xs text-muted-foreground mb-4">{poem.year}</p>
          <p className="text-muted-foreground italic text-sm">{poem.preview}</p>
        </div>
      ))}
    </div>
  )
}
