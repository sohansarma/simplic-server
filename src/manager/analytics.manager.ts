class AnalyticsManager {
  social: string;

  constructor(request: any) {
    this.social = request.params.social;
  }

  async fetch() {
    try {
      return { social: this.social };
    } catch (error) {
      console.error("Unable to fetch data: ", error);
    }
  }
}

export default AnalyticsManager;
