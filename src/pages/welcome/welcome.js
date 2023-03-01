import "./welcome.css";

export default function Welcome() {
  return (
    <div id="main-div" class="row">
      <div class="col mx-vs my-xl bg-white faded-edge">
        <div class="row align-center imagine-border">
          <h1>Welcome</h1>
        </div>
        <div class="row mx-vl px-m imagine-border">
          <div class="col">
            <div class="row justify-c">
              <h2>Introduction</h2>
            </div>
            <div class="row justify-c">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce
                posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis
                urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at,
                vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
