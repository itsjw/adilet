from rest_framework import routers
from api.views import ClinicViewSet, HelpCategoryViewSet, EducationCategoryViewSet, HelpViewSet, EducationViewSet

router = routers.DefaultRouter()
router.register(r'clinic', ClinicViewSet, base_name='clinic')
router.register(r'hcategory', HelpCategoryViewSet, base_name='help_category')
router.register(r'help', HelpViewSet, base_name='help')
router.register(r'ecategory', EducationCategoryViewSet, base_name='education_category')
router.register(r'education', EducationViewSet, base_name='education')
urlpatterns = router.urls