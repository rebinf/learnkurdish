namespace LearnKurdish
{
    public class ContentsModel
    {
        public static ContentsModel Instance { get; set; }

        public List<SectionModel> Sections { get; set; } = new List<SectionModel>();
    }
}
