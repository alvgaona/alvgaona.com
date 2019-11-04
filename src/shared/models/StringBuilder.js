// eslint-disable-next-line max-classes-per-file
class StringBuilder {
  static Builder() {
    class Builder {
      constructor() {
        this.bucket = [];
      }

      append(str) {
        if (str !== null) {
          this.bucket.push(str);
        }
        return this;
      }

      build() {
        return this.bucket.join(' ');
      }
    }
    return new Builder();
  }
}

export default StringBuilder;
