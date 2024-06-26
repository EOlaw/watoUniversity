<% layout('layouts/boilerplate') %>

<% function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} %>

<body>
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->
    
    <!-- Carousel Start -->
    <div class="container-fluid p-0 mb-5">
        <div class="owl-carousel header-carousel position-relative">
            <div class="owl-carousel-item position-relative">
                <img class="img-fluid" src="https://flexi.ink/images/real-estate/BG1.png" alt="">
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-8">
                                <h5 class="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                <h1 class="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                <p class="fs-5 text-white mb-4 pb-2">Discover the best online courses tailored to your learning needs. Whether you're a beginner or an expert, our platform offers a wide range of courses to help you enhance your skills and achieve your goals.</p>
                                <a href="#" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="/user/register" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="owl-carousel-item position-relative">
                <img class="img-fluid" src="https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg" alt="">
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-sm-10 col-lg-8">
                                <h5 class="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                <h1 class="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                                <p class="fs-5 text-white mb-4 pb-2">Embark on your online learning journey from the comfort of your home. With our platform, you have access to top-quality courses designed to expand your knowledge and skills. Join us today and take the first step towards your educational goals.</p>
                                <a href="#" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="/user/register" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Carousel End -->


    <!-- Service Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 class="mb-3">Skilled Instructors</h5>
                            <p>Our skilled instructors are experts in their fields, dedicated to providing high-quality education and guidance to our students.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 class="mb-3">Online Classes</h5>
                            <p>Experience our online classes designed to offer flexibility and convenience without compromising on educational quality.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 class="mb-3">Home Projects</h5>
                            <p>Engage in hands-on learning with our home projects, where you can apply your knowledge to real-world scenarios and enhance your skills.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="service-item text-center pt-3">
                        <div class="p-4">
                            <i class="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 class="mb-3">Book Library</h5>
                            <p>Explore our extensive book library featuring a wide range of resources to support your learning journey and expand your knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Service End -->

    
    <!-- About Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="img-fluid position-absolute w-100 h-100" src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/18485648_1413534655408285_4546101693240276361_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7adGlotVft4Ab7LwZFZ&_nc_ht=scontent-hou1-1.xx&oh=00_AfDwAAn7RCSVV6N62UJV9ja6b6Stf2aj9rzCMfHMhY6RyA&oe=6647B11F" alt="" style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 class="mb-4">Welcome to Wato University</h1>
                    <p class="mb-4">Welcome to our educational website! We're dedicated to providing hight-quality learning resources and courses to help you achieve your educational goals.</p>
                    <p class="mb-4">Our team of expert instructors ensures that our courses cover a wide range of topics, from programming and web development to art and design. Whether you're a beginner or an experienced learner, there's something here for everyone.</p>
                    <p class="mb-4">At Your Educational Website, we believe in the power of education to transform lives. That's why we're committed to making learning accessible and enjoyable for all.</p>
                    <p class="mb-4">Feel free to explore our website and discover the courses we offer. If you have any questions or feedback, don't hesitate to <a href="/contact">contact us</a>. We're here to help you succeed!</p>
                    <p class="mb-4">Stay updated with our latest news and announcements by following us on social media:</p>
                    <div class="row gy-2 gx-4 mb-4">
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Online Classes</p>
                        </div>
                        <div class="col-sm-6">
                            <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                    </div>
                    <a class="btn btn-primary py-3 px-5 mt-2" href="/about">Read More</a>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->

    <!-- Categories Start -->
    <div class="container-xxl py-5 category">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Categories</h6>
                <h1 class="mb-5">Courses Categories</h1>
            </div>
            <div class="row g-3">
                <% const courseTags = courses.reduce((tags, course) => tags.concat(course.tags), []); %>
                <% const uniqueTags = Array.from(new Set(courseTags)); %>
                <% uniqueTags.slice(0, 4).forEach((tag, index) => { %>
                    <% const tagCourses = courses.filter(course => course.tags.includes(tag)); %>
                    <% const tagCourseImages = tagCourses.map(course => course.images.length > 0 ? course.images[0].url : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'); %>
                    <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="<%= index * 0.2 %>s">
                        <a class="position-relative d-block overflow-hidden" href="#">
                            <img class="img-fluid" src="<%= tagCourseImages[0] %>" alt="Category Image">
                            <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
                                <h5 class="m-0"><%= tag %></h5>
                                <small class="text-primary"><%= tagCourses.length %> Courses</small>
                            </div>
                        </a>
                    </div>
                <% }) %>
            </div>
        </div>
    </div>
    <!-- Categories End -->

    <!-- Courses Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 class="mb-5">Popular Courses</h1>
            </div>
            <div class="row g-4 justify-content-center">
                <!-- Display the first three courses -->
                <% let counter = 0; %>
                <% courses.forEach((course, i) => { %>
                    <% if (counter < 3) { %>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="<%= i * 0.2 + 0.1 %>s">
                            <div class="course-item bg-light">
                                <div class="position-relative overflow-hidden">
                                    <% if (course.images.length > 0 && course.images[0].url) { %>
                                        <a href="/admin/course/<%= course._id %>"><img class="img-fluid" src="<%= course.images[0].url %>" alt="<%= course.courseName %> Image"></a>
                                    <% } else { %>
                                        <a href="/admin/course/<%= course._id %>"><img class="img-fluid" src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" alt="Course Image"></a>
                                    <% } %>
                                    <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                        <a href="/admin/course/<%= course._id %>" class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
                                        <a href="/user/register" class="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Join Now</a>
                                    </div>
                                </div>
                                <div class="text-center p-4 pb-0">
                                    <h3 class="mb-0">$<%= course.price %></h3>
                                    <div class="mb-3">
                                        <!-- Display custom star icons based on the rating -->
                                        <div class="star-rating" data-rating="<%= course.rating %>">
                                            <% for (let j = 1; j <= 5; j++) { %>
                                                <% if (j <= course.rating) { %>
                                                    <input type="radio" id="star<%= j %>-<%= i %>" name="rating" value="<%= j %>" style="display: none;"> 
                                                    <label for="star<%= j %>-<%= i %>" title="<%= j %> star" class="star">&#9734;</label> 
                                                <% } else { %>
                                                    <input type="radio" id="star<%= j %>-<%= i %>" name="rating" value="<%= j %>" style="display: none;" checked> 
                                                    <label for="star<%= j %>-<%= i %>" title="<%= j %> star" class="star">&#9733;</label>
                                                <% } %>
                                            <% } %> 
                                            <small>(<%= course.ratings.length %>)</small>
                                        </div>
                                    </div>
                                    <a href="/admin/course/<%= course._id %>"><h5 class="mb-4"><%= course.courseName %></h5></a>
                                </div>
                                <div class="d-flex border-top">
                                    <% if (course.instructors && course.instructors.length > 0) { %>
                                        <small class="flex-fill text-center border-end py-2">
                                            <i class="fa fa-user-tie text-primary me-2"></i>
                                            <%= capitalizeFirstLetter(course.instructors[0].firstname) %> <%= capitalizeFirstLetter(course.instructors[0].lastname) %>
                                        </small>
                                    <% } else { %>
                                        <small class="flex-fill text-center border-end py-2">
                                            <i class="fa fa-user-tie text-primary me-2"></i>
                                        </small>
                                    <% } %>
                                    <small class="flex-fill text-center border-end py-2">
                                        <i class="fa fa-clock text-primary me-2"></i>
                                        <%= course.duration %>
                                    </small>
                                    <small class="flex-fill text-center py-2">
                                        <i class="fa fa-user text-primary me-2"></i>
                                        <%= course.students.length %>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <% counter++; %>
                    <% } %>
                <% }); %>
            </div>
        </div>
    </div>
    <!-- Courses End -->

    <!-- Team Start
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">Instructors</h6>
                <h1 class="mb-5">Expert Instructors</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="img/team-1.jpg" alt="">
                        </div>
                        <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="img/team-2.jpg" alt="">
                        </div>
                        <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="img/team-3.jpg" alt="">
                        </div>
                        <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="team-item bg-light">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="img/team-4.jpg" alt="">
                        </div>
                        <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                            <div class="bg-light d-flex justify-content-center pt-2 px-1">
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Instructor Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    
    
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="text-center">
                <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                <h1 class="mb-5">Our Students Say!</h1>
            </div>
            <div class="owl-carousel testimonial-carousel position-relative">
                <div class="testimonial-item text-center">
                    <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style="width: 80px; height: 80px;">
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    Testimonial End -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</body>

