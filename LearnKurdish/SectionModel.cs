namespace LearnKurdish
{
    public class SectionModel
    {
        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public bool IsSubSection { get; set; } = false;

        public SectionTable Table { get; set; }

    }
}
