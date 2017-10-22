from rest_framework import routers
from api.views import ClinicViewSet, HelpCategoryViewSet, EducationCategoryViewSet, ArticleViewSet

router = routers.DefaultRouter()
router.register(r'clinic', ClinicViewSet, base_name='clinic')
router.register(r'hcategory', HelpCategoryViewSet, base_name='help_category')
router.register(r'ecategory', EducationCategoryViewSet, base_name='education_category')
router.register(r'article', ArticleViewSet, base_name='article')
urlpatterns = router.urls